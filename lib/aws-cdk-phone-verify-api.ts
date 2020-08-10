import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class AwsCdkPhoneVerifyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const start = new lambda.Function(this, 'HelloWorld', {
      code: lambda.Code.asset(
        'src/AwsCdkPhoneVerifyApi/bin/Debug/netcoreapp3.1/publish'
      ),
      runtime: lambda.Runtime.DOTNET_CORE_3_1,
      handler:
        'AwsCdkPhoneVerifyApi::AwsCdkPhoneVerifyApi.Functions::StartAsync',
      memorySize: 256,
    });

    const api = new apigateway.RestApi(this, 'AwsCdkPhoneVerifyApi', {
      restApiName: 'AwsCdkPhoneVerifyApi',
    });

    const verifyResouce = api.root.addResource('verify');

    const startRoute = verifyResouce.addResource('start');

    // POST verify/start
    startRoute.addMethod('POST', new apigateway.LambdaIntegration(start));
  }
}
