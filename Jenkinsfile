pipeline {
    agent any

    environment {
        HARBOR_URL = 'https://<harbor-url>'
        HARBOR_CREDENTIALS = 'harbor-robot-credentials' // ID das credenciais
        IMAGE_NAME = 'meu-app'
        IMAGE_TAG = "${env.BUILD_ID}" // Usar o ID do build como tag
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Construir a imagem Docker
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Rodar testes, se necessário
                    // Exemplo: docker.image("${IMAGE_NAME}:${IMAGE_TAG}").inside { sh 'run-test-command' }
                    echo 'Rodando testes...'
                }
            }
        }
        stage('Push to Harbor') {
            steps {
                script {
                    // Login no Harbor usando a Robot Account
                    docker.withRegistry(HARBOR_URL, HARBOR_CREDENTIALS) {
                        // Enviar a imagem para o Harbor
                        docker.image("${IMAGE_NAME}:${IMAGE_TAG}").push()
                    }
                }
            }
        }
    }

    post {
        success {
            echo "Imagem ${IMAGE_NAME}:${IMAGE_TAG} enviada com sucesso para o Harbor!"
        }
        failure {
            echo "Falha no pipeline. Verifique os logs."
        }
    }
}
