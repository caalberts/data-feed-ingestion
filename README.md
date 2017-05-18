# Data Feed Ingestion

This project is a spike to ingest data from Adobe Analytics Data Feeds. Data is uploaded by Adobe Data Feeds to an Amazon S3 bucket, which then gets picked up by AWS Lambda functions for ingestion into a database.

Prerequisites:
1. AWS profile created either through `aws-cli` of `serverless config credentials`
2. S3 bucket created to receive Adobe Analytics Data Feeds

To set up the Amazon Lambda function using serverless framework:
1. Set the following values in the environment:
  - `AWS_PROFILE`: AWS profile used to create the lambda function
  - `S3_BUCKET`: Name of S3 bucket which will receive data from Adobe Analytics Data Feeds
2. `serverless deploy` to deploy function to AWS Lambda
3. Configure event notification on the S3 bucket to notify the lambda function.
