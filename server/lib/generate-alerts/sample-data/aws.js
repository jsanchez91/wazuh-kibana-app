/*
 * Wazuh app - AWS sample data
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

 // Amazon AWS services
export const source = ["guardduty", "cloudtrail", "vpcflow", "config"];
export const accountId = ["186157501624", "117521235382", "150447125201", "18773455640", "186154171780", "250141701015"];
export const region = ["eu-west-1", "eu-west-2", "us-east-1", "us-east-2", "us-west-1", "us-west-2", "me-south-1", "ap-east-1", "ap-south-1"]; // https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions
export const buckets = ["aws-bucket1", "aws-bucket2", "aws-bucket3"];

export const instanceId = ['i-060bb01699dddc20c','i-060bb020479bedc20w', 'i-070eb020479bebf20a', 'i-070eb015479befb15d', 'i-057eb060779fdae15b'];

export const remoteIpDetails = [
  {
    country: {
      countryName: "Mexico"
    },
    city: {
      cityName: "Mérida"
    },
    geoLocation: {
      lon: "-89.616700",
      lat: "20.950000"
    },
    organization: {
      asnOrg: "Uninet S.A. de C.V.",
      org: "Telmex",
      isp: "Telmex",
      asn: "8151"
    },
    ipAddressV4: "180.154.2.40"
  },
  {
    country: {
      countryName: "Italy"
    },
    city: {
      cityName: "Savona"
    },
    geoLocation: {
      lon: "8.477200",
      lat: "44.309000"
    },
    organization: {
      asnOrg: "Fastweb",
      org: "Fastweb",
      isp: "Fastweb",
      asn: "12874"
    },
    ipAddressV4: "2.230.250.69"
  },
  {
    country: {
      countryName: "Mexico"
    },
    city: {
      cityName: "Colima"
    },
    geoLocation: {
      lon: "-103.714500",
      lat: "19.266800"
    },
    organization: {
      asnOrg: "Uninet S.A. de C.V.",
      org: "Telmex",
      isp: "Telmex",
      asn: "8151"
    },
    ipAddressV4: "187.234.16.206"
  },
  {
    country: {
      countryName: "Netherlands"
    },
    city: {
      cityName: "Amsterdam"
    },
    geoLocation: {
      lon: "4.889700",
      lat: "52.374000"
    },
    organization: {
      asnOrg: "SpectraIP B.V.",
      org: "SpectraIP B.V.",
      isp: "SpectraIP B.V.",
      asn: "62068"
    },
    ipAddressV4: "45.14.224.100"
  },
  {
    country: {
      "countryName": "Italy"
    },
    city: {
      cityName: "Palermo"
    },
    geoLocation: {
      lon: "13.334100",
      lat: "38.129000"
    },
    organization: {
      asnOrg: "Telecom Italia",
      org: "Telecom Italia Business",
      isp: "Telecom Italia Business",
      asn: "3269"
    },
    ipAddressV4: "79.8.100.126"
  },
  {
    country: {
      countryName: "United States"
    },
    city: {
      cityName: "Panama City"
    },
    geoLocation: {
      lon: "-85.669600",
      lat: "30.190900"
    },
    organization: {
      asnOrg: "WOW-INTERNET",
      org: "WideOpenWest",
      isp: "WideOpenWest",
      asn: "12083"
    },
    ipAddressV4: "69.171.207.149"
  }
];

export const instanceDetails = [
  {
    "launchTime": "2020-04-22T11:17:08Z",
    "instanceId": "i-0b0b8b34a37c8f1c2",
    "networkInterfaces": {
      "networkInterfaceId": "eni-01e777fb9abc548e4",
      "subnetId": "subnet-7930da22",
      "vpcId": "vpc-68e3c60f",
      "privateDnsName": "ip-10-0-2-2.ec2.internal",
      "publicIp": "50.220.190.204",
      "publicDnsName": "ec2-50-220-190-204.compute-1.amazonaws.com",
      "privateIpAddress": "10.0.2.2"
    },
    "instanceState": "running",
    "imageId": "ami-0ff8a91507f77f867",
    "instanceType": "t2.small",
    "imageDescription": "Amazon Linux AMI 2018.03.0.20180811 x86_64 HVM GP2",
    "iamInstanceProfile": {
      "id": "AIPAJGAZMFPZHKIBOCUOW",
      "arn": "arn:aws:iam::{data.aws.accountId}:instance-profile/opsworks-web-production"
    },
    "availabilityZone": "us-east-1a"
  },
  {
    "launchTime": "2019-03-22T14:15:41Z",
    "instanceId": "i-0cab4a083d57dc312",
    "networkInterfaces": {
      "networkInterfaceId": "eni-0cc465b2d939dafd6",
      "subnetId": "subnet-6b1d6203",
      "vpcId": "vpc-921e61fa",
      "privateDnsName": "ip-10-0-0-251.ec2.internal",
      "publicIp": "54.88.48.38",
      "publicDnsName": "ec2-54-88-48-38.compute-1.amazonaws.com",
      "privateIpAddress": "10.0.0.251"
    },
    "instanceState": "running",
    "imageId": "ami-09ae67bbfcd722396",
    "instanceType": "a1.medium",
    "imageDescription": "Canonical, Ubuntu, 18.04 LTS, UNSUPPORTED daily arm64 bionic image build on 2019-02-12",
    "productCodes": {
      "productCodeId": "zud1u4kjmxu2j2jf0n36beqt",
      "productCodeType": "marketplace"
    },
    "iamInstanceProfile": { // FIXME
      "id": "AIPAJGAZMFPZHKIBOCUOW",
      "arn": "arn:aws:iam::{data.aws.accountId}:instance-profile/opsworks-web-production"
    },
    "availabilityZone": "us-east-1e"
  }
]

export const guarddutyPortProbe = {
  data: {
    aws: {
      severity: "2",
      schemaVersion: "2.0",
      resource: {
        // instanceDetails
        resourceType: "Instance"
      },
      log_info: {
        s3bucket: "wazuh-aws-wodle",
        log_file: "guardduty/2020/04/22/04/firehose_guardduty-1-2020-04-22-04-31-03-212b5b9b-ec62-4a07-85d7-b1699b9c031e.zip"
      },
      description: "EC2 instance has an unprotected port which is being probed by a known malicious host.",
      source: "guardduty",
      type: "Recon:EC2/PortProbeUnprotectedPort",
      title: "Unprotected port on EC2 instance {data.aws.resource.instanceDetails.instanceId} is being probed.",
      // accountId: "166157441623",
      // createdAt: "2019-07-31T16:31:14.739Z",
      partition: "aws",
      service: {
        archived: "false",
        resourceRole: "TARGET",
        detectorId: "cab38390b728c06fb2897dfcebffb79d",
        // eventFirstSeen: "2019-07-31T16:18:08Z",
        // eventLastSeen: "2020-04-22T04:11:01Z",
        additionalInfo: {
          threatListName: "ProofPoint",
          threatName: "Scanner"
        },
        count: "2594",
        action: {
          actionType: "PORT_PROBE",
          portProbeAction: {
            blocked: "false",
            portProbeDetails: {
              localPortDetails: {
                port: "80",
                portName: "HTTP"
              },
              remoteIpDetails: {
                country: {
                  countryName: "Mexico"
                },
                city: {
                  cityName: "M?rida"
                },
                geoLocation: {
                  lon: "-89.616700",
                  lat: "20.950000"
                },
                organization: {
                  asnOrg: "Uninet S.A. de C.V.",
                  org: "Telmex",
                  isp: "Telmex",
                  asn: "8151"
                },
                ipAddressV4: "187.155.2.35"
              }
            }
          }
        },
        "serviceName": "guardduty"
      }
    }
  },
  rule: {
    firedtimes: 1,
    mail: false,
    level: 3,
    description: "AWS GuardDuty: PORT_PROBE - Unprotected port on EC2 instance {data.aws.resource.instanceDetails.instanceId} is being probed. [IP: {data.aws.service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV4}] [Port: {data.aws.service.action.portProbeAction.portProbeDetails.localPortDetails.port}]",
    groups: ["amazon","aws","aws_guardduty"],
    id: "80305"
  },
  location: "Wazuh-AWS",
  decoder: {
    "name": "json"
  },
};

export const apiCall = {
  "data": {
    "aws": {
      "severity": "5",
      "schemaVersion": "2.0",
      "resource": {
        "accessKeyDetails": {
          "principalId": "AIDAIL4SI43KE7QMMBDB2",
          "userType": "IAMUser",
          "userName": ""
        },
        "resourceType": "AccessKey"
      },
      "log_info": {
        "s3bucket": "wazuh-aws-wodle",
        "log_file": "guardduty/2020/04/22/10/firehose_guardduty-1-2020-04-22-10-36-02-d55c99dc-900a-486a-8339-59a7a8254ab2.zip"
      },
      "description": "Unusual console login seen from principal {data.aws.resource.accessKeyDetails.userName}. Login activity using this client application, from the specific location has not been seen before from this principal.",
      "source": "guardduty",
      "type": "UnauthorizedAccess:IAMUser/ConsoleLogin",
      "title": "Unusual console login was seen for principal {data.aws.resource.accessKeyDetails.userName}.",
      "accountId": "166157441623",
      "createdAt": "2020-04-22T10:30:26.721Z",
      "partition": "aws",
      "service": {
        "archived": "false",
        "resourceRole": "TARGET",
        "detectorId": "cab38390b728c06fb2897dfcebffb79d",
        "eventFirstSeen": "2020-04-22T10:09:51Z",
        "eventLastSeen": "2020-04-22T10:09:55Z",
        "additionalInfo": {
          "recentApiCalls": {
            "count": "1",
            "api": "ConsoleLogin"
          }
        },
        "count": "1",
        "action": {
          "actionType": "AWS_API_CALL",
          "awsApiCallAction": {
            "callerType": "Remote IP",
            "api": "ConsoleLogin",
            "serviceName": "signin.amazonaws.com",
            "remoteIpDetails": {
              "country": {
                "countryName": "United States"
              },
              "city": {
                "cityName": "Ashburn"
              },
              "geoLocation": {
                "lon": "-77.472800",
                "lat": "39.048100"
              },
              "organization": {
                "asnOrg": "ASN-GIGENET",
                "org": "GigeNET",
                "isp": "GigeNET",
                "asn": "32181"
              },
              "ipAddressV4": "70.32.0.78"
            }
          }
        },
        "serviceName": "guardduty"
      },
      "id": "a8b8d0b82c50eed686df4d24fa25c333",
      "region": "us-east-1",
      "arn": "arn:aws:guardduty:us-east-1:166157441623:detector/cab38390b728c06fb2897dfcebffb79d/finding/a8b8d0b82c50eed686df4d24fa25c333",
      "updatedAt": "2020-04-22T10:30:26.721Z"
    }
  },
  "rule": {
    // "firedtimes": 1,
    "mail": false,
    "level": 6,
    "description": "AWS GuardDuty: AWS_API_CALL - Unusual console login was seen for principal {data.aws.resource.accessKeyDetails.userName}.",
    "groups": [
      "amazon",
      "aws",
      "aws_guardduty"
    ],
    "id": "80302"
  },
  "location": "Wazuh-AWS",
  "decoder": {
    "name": "json"
  }
};

export const networkConnection = {
  "data": {
    "integration": "aws",
    "aws": {
      "severity": "5",
      "schemaVersion": "2.0",
      "resource": {
        "resourceType": "Instance"
      },
      "description": "EC2 instance i-0cab4a083d57dc312 is communicating with a remote host on an unusual server port 5060.",
      "source": "guardduty",
      "type": "Behavior:EC2/NetworkPortUnusual",
      "title": "Unusual outbound communication seen from EC2 instance i-0cab4a083d57dc312 on server port 5060.",
      "accountId": "166157441623",
      "createdAt": "2020-04-22T07:18:12.769Z",
      "partition": "aws",
      "service": {
        "archived": "false",
        "resourceRole": "ACTOR",
        "detectorId": "cab38390b728c06fb2897dfcebffb79d",
        "eventFirstSeen": "2020-04-22T07:13:44Z",
        "eventLastSeen": "2020-04-22T07:15:04Z",
        "additionalInfo": {
          "localPort": "50040",
          "outBytes": "1912",
          "inBytes": "4621",
          "unusual": "5060"
        },
        "count": "8",
        "action": {
          "actionType": "NETWORK_CONNECTION",
          "networkConnectionAction": {
            "localIpDetails": {
              "ipAddressV4": "10.0.0.251"
            },
            "protocol": "TCP",
            "blocked": "false",
            "connectionDirection": "OUTBOUND",
            "localPortDetails": {
              "port": "36440",
              "portName": "Unknown"
            },
            "remotePortDetails": {
              "port": "5060",
              "portName": "Unknown"
            },
            "remoteIpDetails": {
              "country": {
                "countryName": "United States"
              },
              "city": {
                "cityName": "Washington"
              },
              "geoLocation": {
                "lon": "-77.031900",
                "lat": "38.905700"
              },
              "organization": {
                "asnOrg": "ASN-STARRY",
                "org": "Starry",
                "isp": "Starry",
                "asn": "395354"
              },
              "ipAddressV4": "8.3.87.2"
            }
          }
        },
        "serviceName": "guardduty"
      },
      "id": "06b8d0602d109db1282f9143809f74b4",
      "region": "us-east-1",
      "arn": "arn:aws:guardduty:us-east-1:166157441623:detector/cab38390b728c06fb2897dfcebffb79d/finding/06b8d0602d109db1282f9143809f74b4",
      "updatedAt": "2020-04-22T07:18:12.778Z"
    }
  },
  "rule": {
    "firedtimes": 2,
    "mail": false,
    "level": 6,
    "description": "AWS GuardDuty: NETWORK_CONNECTION - Unusual outbound communication seen from EC2 instance i-0cab4a083d57dc312 on server port 5060.",
    "groups": [
      "amazon",
      "aws",
      "aws_guardduty"
    ],
    "id": "80302"
  },
  "location": "Wazuh-AWS",
  "decoder": {
    "name": "json"
  },
};

export const iamPolicyGrantGlobal = {
  "data": {
    "aws": {
      "severity": "CRITICAL",
      "actor": "resources.wazuh.com",
      "summary": {
        "Timestamps": "2020-04-22T00:11:44.617597Z,",
        "Description": "S3 Bucket uses IAM policy to grant read rights to Everyone. Your IAM policy contains a clause that effectively grants read access to any user. Please audit this bucket, and data contained within and confirm that this is intentional. If intentional, please use the alert whitelist feature to prevent future alerts",
        "Bucket": "resources.wazuh.com,",
        "Record Count": "1",
        "Event Count": "1",
        "recipientAccountId": "166157441623,",
        "ACL": {
          "resources": {
            "wazuh": {
              "com": {
                "Owner": {
                  "DisplayName": "wazuh",
                  "ID": "3ab1235e25ea9e94ff9b7e4e379ba6b0c872cd36c096e1ac8cce7df433b47450"
                }
              }
            }
          }
        }
      },
      "risk-score": "9",
      "notification-type": "ALERT_CREATED",
      "log_info": {
        "s3bucket": "wazuh-aws-wodle",
        "log_file": "macie/2020/04/22/00/firehose_macie-1-2020-04-22-00-14-46-0b1ede94-f399-4e54-8815-1c6587eee34de"
      },
      "name": "S3 Bucket IAM policy grants global read rights",
      "created-at": "2020-04-22T00:14:45.764008",
      "source": "macie",
      "url": "https://mt.us-east-1.macie.aws.amazon.com/posts/arn%3Aaws%3Amacie%3Aus-east-1%3A166157441623%3Atrigger%2Fb731d9ffb1fe61508d4a478c92efa666%2Falert%2Fd78f0fd0a55ad458799e4c1fb6a0edcd",
      "tags": {
        "value": "Open Permissions,Basic Alert,"
      },
      "alert-arn": "arn:aws:macie:us-east-1:166157441623:trigger/b731d9ffb1fe61508d4a478c92efa666/alert/d78f0fd0a55ad458799e4c1fb6a0ed"
    }
  },
  "rule": {
    "mail": true,
    "level": 12,
    "description": "AWS Macie CRITICAL: S3 Bucket IAM policy grants global read rights - S3 Bucket uses IAM policy to grant read rights to Everyone. Your IAM policy contains a clause that effectively grants read access to any user. Please audit this bucket, and data contained within and confirm that this is intentional. If intentional, please use the alert whitelist feature to prevent future alerts",
    "groups": ["amazon","aws","aws_macie"],
    "id": "80355"
  },
  "location": "Wazuh-AWS",
  "decoder": {
    "name": "json"
  }
}

// {
//   "_index": "wazuh-alerts-3.x-2020.04.22",
//   "_type": "_doc",
//   "_id": "wxl7oXEBZlVI3pW_48C4",
//   "_version": 1,
//   "_score": null,
//   "_source": {
//     "cluster": {
//       "node": "master",
//       "name": "wazuh"
//     },
//     "input": {
//       "type": "log"
//     },
//     "agent": {
//       "name": "ip-10-0-0-219.us-west-1.compute.internal",
//       "id": "000"
//     },
//     "manager": {
//       "name": "ip-10-0-0-219.us-west-1.compute.internal"
//     },
//     "data": {
//       "integration": "aws",
//       "aws": {
//         "severity": "5",
//         "schemaVersion": "2.0",
//         "resource": {
//           "accessKeyDetails": {
//             "principalId": "AIDAIL4SI43KE7QMMBDB2",
//             "userType": "IAMUser",
//             "userName": "braulio"
//           },
//           "resourceType": "AccessKey"
//         },
//         "log_info": {
//           "s3bucket": "wazuh-aws-wodle",
//           "log_file": "guardduty/2020/04/22/10/firehose_guardduty-1-2020-04-22-10-36-02-d55c99dc-900a-486a-8339-59a7a8254ab2.zip"
//         },
//         "description": "Unusual console login seen from principal braulio. Login activity using this client application, from the specific location has not been seen before from this principal.",
//         "source": "guardduty",
//         "type": "UnauthorizedAccess:IAMUser/ConsoleLogin",
//         "title": "Unusual console login was seen for principal braulio.",
//         "accountId": "166157441623",
//         "createdAt": "2020-04-22T10:30:26.721Z",
//         "partition": "aws",
//         "service": {
//           "archived": "false",
//           "resourceRole": "TARGET",
//           "detectorId": "cab38390b728c06fb2897dfcebffb79d",
//           "eventFirstSeen": "2020-04-22T10:09:51Z",
//           "eventLastSeen": "2020-04-22T10:09:55Z",
//           "additionalInfo": {
//             "recentApiCalls": {
//               "count": "1",
//               "api": "ConsoleLogin"
//             }
//           },
//           "count": "1",
//           "action": {
//             "actionType": "AWS_API_CALL",
//             "awsApiCallAction": {
//               "callerType": "Remote IP",
//               "api": "ConsoleLogin",
//               "serviceName": "signin.amazonaws.com",
//               "remoteIpDetails": {
//                 "country": {
//                   "countryName": "United States"
//                 },
//                 "city": {
//                   "cityName": "Ashburn"
//                 },
//                 "geoLocation": {
//                   "lon": "-77.472800",
//                   "lat": "39.048100"
//                 },
//                 "organization": {
//                   "asnOrg": "ASN-GIGENET",
//                   "org": "GigeNET",
//                   "isp": "GigeNET",
//                   "asn": "32181"
//                 },
//                 "ipAddressV4": "70.32.0.78"
//               }
//             }
//           },
//           "serviceName": "guardduty"
//         },
//         "id": "a8b8d0b82c50eed686df4d24fa25c333",
//         "region": "us-east-1",
//         "arn": "arn:aws:guardduty:us-east-1:166157441623:detector/cab38390b728c06fb2897dfcebffb79d/finding/a8b8d0b82c50eed686df4d24fa25c333",
//         "updatedAt": "2020-04-22T10:30:26.721Z"
//       }
//     },
//     "rule": {
//       "firedtimes": 1,
//       "mail": false,
//       "level": 6,
//       "description": "AWS GuardDuty: AWS_API_CALL - Unusual console login was seen for principal braulio.",
//       "groups": [
//         "amazon",
//         "aws",
//         "aws_guardduty"
//       ],
//       "id": "80302"
//     },
//     "location": "Wazuh-AWS",
//     "decoder": {
//       "name": "json"
//     },
//     "id": "1587552182.28229378",
//     "timestamp": "2020-04-22T10:43:02.137+0000"
//   },
//   "fields": {
//     "data.aws.createdAt": [
//       "2020-04-22T10:30:26.721Z"
//     ],
//     "data.aws.service.eventLastSeen": [
//       "2020-04-22T10:09:55.000Z"
//     ],
//     "data.aws.updatedAt": [
//       "2020-04-22T10:30:26.721Z"
//     ],
//     "data.aws.service.eventFirstSeen": [
//       "2020-04-22T10:09:51.000Z"
//     ],
//     "timestamp": [
//       "2020-04-22T10:43:02.137Z"
//     ]
//   },
//   "highlight": {
//     "cluster.name": [
//       "@kibana-highlighted-field@wazuh@/kibana-highlighted-field@"
//     ],
//     "rule.groups": [
//       "@kibana-highlighted-field@aws@/kibana-highlighted-field@"
//     ]
//   },
//   "sort": [
//     1587552182137
//   ]
// }

// {
//   "_index": "wazuh-alerts-3.x-2020.04.22",
//   "_type": "_doc",
//   "_id": "lR_XoHEBET-s4P06GKsl",
//   "_version": 1,
//   "_score": null,
//   "_source": {
//     "cluster": {
//       "node": "master",
//       "name": "wazuh"
//     },
//     "input": {
//       "type": "log"
//     },
//     "agent": {
//       "name": "ip-10-0-0-219.us-west-1.compute.internal",
//       "id": "000"
//     },
//     "manager": {
//       "name": "ip-10-0-0-219.us-west-1.compute.internal"
//     },
//     "data": {
//       "integration": "aws",
//       "aws": {
//         "severity": "5",
//         "schemaVersion": "2.0",
//         "resource": {
//           "instanceDetails": {
//             "launchTime": "2019-03-22T14:15:41Z",
//             "instanceId": "i-0cab4a083d57dc312",
//             "networkInterfaces": {
//               "networkInterfaceId": "eni-0cc465b2d939dafd6",
//               "subnetId": "subnet-6b1d6203",
//               "vpcId": "vpc-921e61fa",
//               "privateDnsName": "ip-10-0-0-251.ec2.internal",
//               "publicIp": "54.88.48.38",
//               "publicDnsName": "ec2-54-88-48-38.compute-1.amazonaws.com",
//               "privateIpAddress": "10.0.0.251"
//             },
//             "instanceState": "running",
//             "imageId": "ami-09ae67bbfcd722396",
//             "instanceType": "a1.medium",
//             "imageDescription": "Canonical, Ubuntu, 18.04 LTS, UNSUPPORTED daily arm64 bionic image build on 2019-02-12",
//             "productCodes": {
//               "productCodeId": "zud1u4kjmxu2j2jf0n36beqt",
//               "productCodeType": "marketplace"
//             },
//             "availabilityZone": "us-east-1e"
//           },
//           "resourceType": "Instance"
//         },
//         "log_info": {
//           "s3bucket": "wazuh-aws-wodle",
//           "log_file": "guardduty/2020/04/22/07/firehose_guardduty-1-2020-04-22-07-31-03-9d867a93-d13b-4ea1-8896-8816b1205278.zip"
//         },
//         "description": "EC2 instance i-0cab4a083d57dc312 is communicating with a remote host on an unusual server port 5060.",
//         "source": "guardduty",
//         "type": "Behavior:EC2/NetworkPortUnusual",
//         "title": "Unusual outbound communication seen from EC2 instance i-0cab4a083d57dc312 on server port 5060.",
//         "accountId": "166157441623",
//         "createdAt": "2020-04-22T07:18:12.769Z",
//         "partition": "aws",
//         "service": {
//           "archived": "false",
//           "resourceRole": "ACTOR",
//           "detectorId": "cab38390b728c06fb2897dfcebffb79d",
//           "eventFirstSeen": "2020-04-22T07:13:44Z",
//           "eventLastSeen": "2020-04-22T07:15:04Z",
//           "additionalInfo": {
//             "localPort": "50040",
//             "outBytes": "1912",
//             "inBytes": "4621",
//             "unusual": "5060"
//           },
//           "count": "8",
//           "action": {
//             "actionType": "NETWORK_CONNECTION",
//             "networkConnectionAction": {
//               "localIpDetails": {
//                 "ipAddressV4": "10.0.0.251"
//               },
//               "protocol": "TCP",
//               "blocked": "false",
//               "connectionDirection": "OUTBOUND",
//               "localPortDetails": {
//                 "port": "36440",
//                 "portName": "Unknown"
//               },
//               "remotePortDetails": {
//                 "port": "5060",
//                 "portName": "Unknown"
//               },
//               "remoteIpDetails": {
//                 "country": {
//                   "countryName": "United States"
//                 },
//                 "city": {
//                   "cityName": "Washington"
//                 },
//                 "geoLocation": {
//                   "lon": "-77.031900",
//                   "lat": "38.905700"
//                 },
//                 "organization": {
//                   "asnOrg": "ASN-STARRY",
//                   "org": "Starry",
//                   "isp": "Starry",
//                   "asn": "395354"
//                 },
//                 "ipAddressV4": "8.3.87.2"
//               }
//             }
//           },
//           "serviceName": "guardduty"
//         },
//         "id": "06b8d0602d109db1282f9143809f74b4",
//         "region": "us-east-1",
//         "arn": "arn:aws:guardduty:us-east-1:166157441623:detector/cab38390b728c06fb2897dfcebffb79d/finding/06b8d0602d109db1282f9143809f74b4",
//         "updatedAt": "2020-04-22T07:18:12.778Z"
//       }
//     },
//     "rule": {
//       "firedtimes": 2,
//       "mail": false,
//       "level": 6,
//       "description": "AWS GuardDuty: NETWORK_CONNECTION - Unusual outbound communication seen from EC2 instance i-0cab4a083d57dc312 on server port 5060.",
//       "groups": [
//         "amazon",
//         "aws",
//         "aws_guardduty"
//       ],
//       "id": "80302"
//     },
//     "location": "Wazuh-AWS",
//     "decoder": {
//       "name": "json"
//     },
//     "id": "1587541381.20719516",
//     "timestamp": "2020-04-22T07:43:01.128+0000"
//   },
//   "fields": {
//     "data.aws.resource.instanceDetails.launchTime": [
//       "2019-03-22T14:15:41.000Z"
//     ],
//     "data.aws.createdAt": [
//       "2020-04-22T07:18:12.769Z"
//     ],
//     "data.aws.service.eventLastSeen": [
//       "2020-04-22T07:15:04.000Z"
//     ],
//     "data.aws.updatedAt": [
//       "2020-04-22T07:18:12.778Z"
//     ],
//     "data.aws.service.eventFirstSeen": [
//       "2020-04-22T07:13:44.000Z"
//     ],
//     "timestamp": [
//       "2020-04-22T07:43:01.128Z"
//     ]
//   },
//   "highlight": {
//     "cluster.name": [
//       "@kibana-highlighted-field@wazuh@/kibana-highlighted-field@"
//     ],
//     "rule.groups": [
//       "@kibana-highlighted-field@aws@/kibana-highlighted-field@"
//     ]
//   },
//   "sort": [
//     1587541381128
//   ]
// }

// {
//   "_index": "wazuh-alerts-3.x-2020.04.22",
//   "_type": "_doc",
//   "_id": "kBlWn3EBZlVI3pW_i004",
//   "_version": 1,
//   "_score": null,
//   "_source": {
//     "cluster": {
//       "node": "master",
//       "name": "wazuh"
//     },
//     "input": {
//       "type": "log"
//     },
//     "agent": {
//       "name": "ip-10-0-0-219.us-west-1.compute.internal",
//       "id": "000"
//     },
//     "manager": {
//       "name": "ip-10-0-0-219.us-west-1.compute.internal"
//     },
//     "data": {
//       "integration": "aws",
//       "aws": {
//         "severity": "CRITICAL",
//         "actor": "resources.wazuh.com",
//         "summary": {
//           "Timestamps": "2020-04-22T00:11:44.617597Z,",
//           "Description": "S3 Bucket uses IAM policy to grant read rights to Everyone. Your IAM policy contains a clause that effectively grants read access to any user. Please audit this bucket, and data contained within and confirm that this is intentional. If intentional, please use the alert whitelist feature to prevent future alerts",
//           "Bucket": "resources.wazuh.com,",
//           "Record Count": "1",
//           "Event Count": "1",
//           "recipientAccountId": "166157441623,",
//           "ACL": {
//             "resources": {
//               "wazuh": {
//                 "com": {
//                   "Owner": {
//                     "DisplayName": "wazuh",
//                     "ID": "3ab1235e25ea9e94ff9b7e4e379ba6b0c872cd36c096e1ac8cce7df433b47101"
//                   }
//                 }
//               }
//             }
//           }
//         },
//         "risk-score": "9",
//         "notification-type": "ALERT_CREATED",
//         "log_info": {
//           "s3bucket": "wazuh-aws-wodle",
//           "log_file": "macie/2020/04/22/00/firehose_macie-1-2020-04-22-00-14-46-0b1ede94-f399-4e54-8815-1c6587eee3b1"
//         },
//         "name": "S3 Bucket IAM policy grants global read rights",
//         "created-at": "2020-04-22T00:14:45.764008",
//         "source": "macie",
//         "url": "https://mt.us-east-1.macie.aws.amazon.com/posts/arn%3Aaws%3Amacie%3Aus-east-1%3A166157441623%3Atrigger%2Fb731d9ffb1fe61508d4a478c92efa666%2Falert%2Fd78f0fd0a55ad458799e4c1fb6a0edcd",
//         "tags": {
//           "value": "Open Permissions,Basic Alert,"
//         },
//         "alert-arn": "arn:aws:macie:us-east-1:166157441623:trigger/b731d9ffb1fe61508d4a478c92efa666/alert/d78f0fd0a55ad458799e4c1fb6a0edcd"
//       }
//     },
//     "rule": {
//       "firedtimes": 1,
//       "mail": true,
//       "level": 12,
//       "description": "AWS Macie CRITICAL: S3 Bucket IAM policy grants global read rights - S3 Bucket uses IAM policy to grant read rights to Everyone. Your IAM policy contains a clause that effectively grants read access to any user. Please audit this bucket, and data contained within and confirm that this is intentional. If intentional, please use the alert whitelist feature to prevent future alerts",
//       "groups": [
//         "amazon",
//         "aws",
//         "aws_macie"
//       ],
//       "id": "80355"
//     },
//     "location": "Wazuh-AWS",
//     "decoder": {
//       "name": "json"
//     },
//     "id": "1587516180.2759554",
//     "timestamp": "2020-04-22T00:43:00.198+0000"
//   },
//   "fields": {
//     "timestamp": [
//       "2020-04-22T00:43:00.198Z"
//     ]
//   },
//   "highlight": {
//     "cluster.name": [
//       "@kibana-highlighted-field@wazuh@/kibana-highlighted-field@"
//     ],
//     "rule.groups": [
//       "@kibana-highlighted-field@aws@/kibana-highlighted-field@"
//     ]
//   },
//   "sort": [
//     1587516180198
//   ]
// }