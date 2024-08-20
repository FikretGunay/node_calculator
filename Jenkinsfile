pipeline {
    agent any
    stages {
        stage("install") {
            steps {
                bat "npm install"
            }
        }
        stage("unit test") {
            steps {
                bat "npm run test:unit"
            }
        }
        stage("integration test") {
            steps {
                bat "npm run test:integration"
            }
        }
        
    }
    post {
        always {
            echo 'Pipeline is completed.'
        }
        success {
            echo 'Pipeline is successfull.'
        }
        failure {
            echo 'Pipeline is unsuccessfull.'
        }
    }
}