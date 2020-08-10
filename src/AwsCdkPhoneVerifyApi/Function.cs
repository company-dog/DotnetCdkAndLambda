using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace AwsCdkPhoneVerifyApi
{
    public class Functions
    {
        public APIGatewayProxyResponse PostAsync(APIGatewayProxyRequest request, ILambdaContext context)
        {

            System.Console.WriteLine($"Request: {request.Body}");

            return new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = "Hello Dotnet Lambda",
            };
        }
    }
}