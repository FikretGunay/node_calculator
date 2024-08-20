pipeline {
    agent any
    stages {
        stage("install") {
            steps {
                sh "npm install"
            }
        }
        stage("unit test") {
            steps {
                sh "npm run test:unit"
            }
        }
        stage("integration test") {
            steps {
                sh "npm run test:integration"
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