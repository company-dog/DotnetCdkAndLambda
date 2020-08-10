#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkPhoneVerifyStack } from '../lib/aws-cdk-phone-verify-api';

const app = new cdk.App();
new AwsCdkPhoneVerifyStack(app, 'AwsCdkPhoneVerifyStack');
