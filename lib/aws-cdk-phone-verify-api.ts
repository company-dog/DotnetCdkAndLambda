import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class AwsCdkPhoneVerifyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorld = new lambda.Function(this, 'HelloWorld', {
      code: lambda.Code.asset(
        'src/AwsCdkPhoneVerifyApi/bin/Debug/netcoreapp3.1/publish'
      ),
      runtime: lambda.Runtime.DOTNET_CORE_3_1,
      handler:
        'AwsCdkPhoneVerifyApi::AwsCdkPhoneVerifyApi.Functions::PostAsync',
      memorySize: 256,
    });
  }
}
