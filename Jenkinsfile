pipeline {
    agent any
    stages {
        stage('Run Unit Tests') {
            steps {
                sh 'sudo npm test'
            }
        }
        stage('Package') {
            steps {
                sh 'docker build -t rhogue/day2 .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d --name day2 -p 3006:3000 rhogue/day2'
            }
        }
        stage('Run Integration Tests') {
            steps {
                sh 'sudo npm test integrationTest/integrationTest.js'
            }
        }
        post {
            cleanup {
                sh 'docker kill day2'
                sh 'docker rm day2'
            }
        }
    }
}