pipeline {
    agent any
    environment {
        CONTAINER_NAME = "mayfirst"
        IMAGE_NAME = "mayfirst-image"
        EMAIL = "masifmeyo786@gmail.com"
        PORT = "5173"
    }
    stages{
        stage("Clone Repo"){
            steps{
                git branch: 'main', 
                url: 'https://github.com/Muhammad-Asif-786/mayfirst.git'
            }
        }
        stage("Build Docker Image"){
            steps{
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage("Stop & Remove Previous Container"){
            steps{
                sh '''
                docker stop ${CONTAINER_NAME} || true
                docker rm ${CONTAINER_NAME} || true
                '''
            }
        }
        stage("Docker Container Run"){
            steps{
                sh '''
                   docker run -d -p ${PORT}:5173 --name ${CONTAINER_NAME} ${IMAGE_NAME}
                '''
            }
        }
        stage("Send Email Notification"){
    steps{
        emailext(
            subject: "mayfirst app Deployed Successfully",
            body: """
                mayfirst app is Deployed Successfully
                URL: http://13.49.145.171:${PORT}/
                """,
                            to: "${EMAIL}"
                        )
                    }
                }
    }
}