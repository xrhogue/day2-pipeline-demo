pipeline {
    agent any
    stages {
        stage('Run Unit Tests') {
            steps {
                sh 'sudo npm test'
            }
        }
        stage {
            steps {
                sh 'docker build -t rhogue/day2 .'
            }
        }
    }
}