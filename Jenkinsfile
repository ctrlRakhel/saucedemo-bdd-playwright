pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            bat 'npx cucumber-js'
        }
    }
}

post {
    always {
        junit testResults: 'reports/junit.xml', allowEmptyResults:true
        archiveArtifacts artifacts: 'reports/**',allowEmptyArchive:true
    }
}