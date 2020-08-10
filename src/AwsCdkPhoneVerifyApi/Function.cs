using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Newtonsoft.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace AwsCdkPhoneVerifyApi
{

    public class Functions
    {
        public APIGatewayProxyResponse StartAsync(APIGatewayProxyRequest request, ILambdaContext context)
        {

            var startRequset = JsonConvert.DeserializeObject<StartRequest>(request.Body);

            var json = JsonConvert.SerializeObject(startRequset, Formatting.None);
            System.Console.WriteLine($"Request: {json}");

            return new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = json,
            };
        }
    }
}