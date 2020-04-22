/*
 * Wazuh app - Script to generate sample alerts
 * Copyright (C) 2015-2020 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

// General
import { IPs, Users, Ports, Paths, Win_Hostnames, GeoLocation, Agents } from './sample-data/common';
import { PCI_DSS, GDPR, HIPAA, GPG13, NIST_800_53 } from './sample-data/regulatory-compliance';

import * as Audit from './sample-data/audit';
import * as Authentication from './sample-data/authentication';
import * as AWS from './sample-data/aws';
import * as IntegrityMonitoring from './sample-data/integrity-monitoring';
import * as CISCAT from './sample-data/ciscat';
import * as Docker from './sample-data/docker';
import * as Mitre from './sample-data/mitre';
import * as Osquery from './sample-data/osquery';
import * as OpenSCAP from './sample-data/openscap';
import * as PolicyMonitoring from './sample-data/policy-monitoring';
import * as Virustotal from './sample-data/virustotal';
import * as Vulnerability from './sample-data/vulnerabilities';
import * as SSH from './sample-data/ssh';

//Alert
const alertIDMax = 6000;

// Rule
const ruleDescription = ["Sample alert 1", "Sample alert 2", "Sample alert 3", "Sample alert 4", "Sample alert 5"];
const ruleMaxLevel = 14;
const ruleMaxFiredtimes = 10;

/**
 * Get a random element of an array
 * @param {[]} array - Array to get a randomized element
 * @returns {any} - Element randomized
 */
function randomArrayItem(array) {
    return array[Math.floor(array.length * Math.random())];
}

/**
 * Generate a alert
 * @param {any} params - params to configure the alert
 * @param {boolean} params.aws - if true, set aws fields
 * @param {boolean} params.audit - if true, set System Auditing fields
 * @param {boolean} params.ciscat - if true, set CIS-CAT fields
 * @param {boolean} params.docker - if true, set Docker fields
 * @param {boolean} params.mitre - if true, set Mitre att&ck fields
 * @param {boolean} params.openscap - if true, set OpenSCAP fields
 * @param {boolean} params.osquery - if true, set Osquery fields
 * @param {boolean} params.rootcheck - if true, set Policy monitoring fields
 * @param {boolean} params.syscheck - if true, set integrity monitoring fields
 * @param {boolean} params.virustotal - if true, set VirusTotal fields
 * @param {boolean} params.vulnerabilities - if true, set vulnerabilities fields
 * @param {boolean} params.pci_dss - if true, set pci_dss fields
 * @param {boolean} params.gdpr - if true, set gdpr fields
 * @param {boolean} params.gpg13 - if true, set gpg13 fields
 * @param {boolean} params.hipaa - if true, set hipaa fields
 * @param {boolean} params.nist_800_53 - if true, set nist_800_53 fields
 * @param {boolean} params.nist_800_53 - if true, set nist_800_53 fields
 * @param {boolean} params.win_authentication_failed - if true, add win_authentication_failed to rule.groups
 * @param {number} params.probability_win_authentication_failed - probability to add win_authentication_failed to rule.groups. Example: 20 will be 20% of probability to add this to rule.groups
 * @param {boolean} params.authentication_failed - if true, add win_authentication_failed to rule.groups
 * @param {number} params.probability_authentication_failed - probability to add authentication_failed to rule.groups
 * @param {boolean} params.authentication_failures - if true, add win_authentication_failed to rule.groups
 * @param {number} params.probability_authentication_failures - probability to add authentication_failures to rule.groups
 * @return {any} - Alert generated 
 */
function generateAlert(params) {
    let alert = {
        timestamp: "2020-01-27T11:08:47.777+0000",
        rule: {
            level: 3,
            description: "Sample alert",
            id: "5502",
            mail: false,
            groups: [],
            // "firedtimes": 3,
            // "pci_dss": ["10.2.5"],
            // "gpg13": ["7.8", "7.9"],
            // "gdpr": ["IV_32.2"],
            // "hipaa": ["164.312.b"],
            // "nist_800_53": ["AU.14", "AC.7"]
        },
        agent: {
            id: "000",
            name: "master"
        },
        manager: {
            name: "master"
        },
        cluster: {
            name: "wazuh"
        },
        id: "1580123327.49031",
        predecoder: {},
        decoder: {},
        data: {},
        location: ""

        // "full_log": "Sample alert full log",
        // "predecoder": {
        //     "program_name": "sshd",
        //     "timestamp": "Jan 27 11:08:46",
        //     "hostname": "master"
        // },
        // "decoder": {
        //     "parent": "pam",
        //     "name": "pam"
        // },
        // "data": {
        //     "dstuser": "root"
        // },
        // "location": "/random"
    }

    // Random fields for base alert
    // alert.id = // TODO: generate random?;
    alert.agent = randomArrayItem(Agents);
    alert.rule.description = randomArrayItem(ruleDescription);
    alert.rule.id = `${randomIntervalInteger(1,alertIDMax)}`;
    alert.rule.level = randomIntervalInteger(1,ruleMaxLevel);
    // alert.rule.firedtimes = randomIntervalInteger(1,ruleMaxFiredtimes);
    alert.timestamp = randomDate();
    

    if (params.manager) {
        if (params.manager.name) {
            alert.manager.name = params.manager.name;
        }
    }

    if (params.cluster) {
        if (params.cluster.name) {
            alert.cluster.name = params.cluster.name;
        }
        if (params.cluster.node) {
            alert.cluster.node = params.cluster.node;
        }
    }

    if (params.aws) {
        let randomType = randomArrayItem(['guarddutyPortProbe', 'apiCall', 'networkConnection', 'iamPolicyGrantGlobal']);

        const beforeDate = new Date(new Date(alert.timestamp) - 3*24*60*60*1000);
        switch (randomType){
            case 'guarddutyPortProbe': {
                const typeAlert = AWS.guarddutyPortProbe;

                alert.data = { ...typeAlert.data };
                alert.data.integration = 'aws';
                
                alert.data.aws.resource.instanceDetails = {...randomArrayItem(AWS.instanceDetails)};
                alert.data.aws.resource.instanceDetails.iamInstanceProfile.arn = interpolateAlertProps(typeAlert.data.aws.resource.instanceDetails.iamInstanceProfile.arn, alert);
                alert.data.aws.title = interpolateAlertProps(alert.data.aws.title, alert);
                alert.data.aws.accountId = randomArrayItem(AWS.accountId);
                alert.data.aws.service.eventFirstSeen = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
                alert.data.aws.service.eventLastSeen = formatDate(new Date(alert.timestamp), 'Y-M-DTh:m:s.lZ');
                alert.data.aws.service.action.portProbeAction.portProbeDetails.remoteIpDetails = {...randomArrayItem(AWS.remoteIpDetails)}
                alert.data.aws.log_info = {
                    s3bucket: 'wazuh-aws-wodle',
                    log_file: `guardduty/${formatDate(new Date(alert.timestamp), 'Y/M/D/h')}/firehose_guardduty-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s-l')}b5b9b-ec62-4a07-85d7-b1699b9c031e.zip`,
                }
                alert.data.aws.service.count = `${randomIntervalInteger(400,4000)}`;
                alert.data.aws.createdAt = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ')
                
                alert.rule = {...typeAlert.rule};
                alert.rule.firedtimes = randomIntervalInteger(1,50);
                alert.rule.description = interpolateAlertProps(typeAlert.rule.description, alert);

                alert.decoder = {...typeAlert.decoder};
                alert.location = typeAlert.location;
                break
            }
            case 'apiCall': {
                const typeAlert = AWS.apiCall;

                alert.data = { ...typeAlert.data };
                alert.data.integration = 'aws';
                
                alert.data.aws.resource.accessKeyDetails.userName = randomArrayItem(Users);
                alert.data.aws.log_info = {
                    s3bucket: 'wazuh-aws-wodle',
                    log_file: `guardduty/${formatDate(new Date(alert.timestamp), 'Y/M/D/h')}/firehose_guardduty-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s-l')}b5b9b-ec62-4a07-85d7-b1699b9c031e.zip`,
                }
                alert.data.aws.accountId = randomArrayItem(AWS.accountId);
                alert.data.aws.service.action.awsApiCallAction.remoteIpDetails = {...randomArrayItem(AWS.remoteIpDetails)}
                alert.data.aws.service.eventFirstSeen = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
                alert.data.aws.service.eventLastSeen = formatDate(new Date(alert.timestamp), 'Y-M-DTh:m:s.lZ');
                alert.data.aws.createdAt = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
                alert.data.aws.title = interpolateAlertProps(alert.data.aws.title, alert);
                alert.data.aws.description = interpolateAlertProps(alert.data.aws.description, alert);
                const count = `${randomIntervalInteger(400,4000)}`;
                alert.data.aws.service.additionalInfo.recentApiCalls.count = count;
                alert.data.aws.service.count = count;

                alert.rule = {...typeAlert.rule};
                alert.rule.firedtimes = randomIntervalInteger(1,50);
                alert.rule.description = interpolateAlertProps(typeAlert.rule.description, alert);

                alert.decoder = {...typeAlert.decoder};
                alert.location = typeAlert.location;
                break
            }
            case 'networkConnection': {
                const typeAlert = AWS.networkConnection;

                alert.data = { ...typeAlert.data };
                alert.data.integration = 'aws';
                
                alert.data.aws.resource.instanceDetails = {...randomArrayItem(AWS.instanceDetails)};
                alert.data.aws.log_info = {
                    s3bucket: 'wazuh-aws-wodle',
                    log_file: `guardduty/${formatDate(new Date(alert.timestamp), 'Y/M/D/h')}/firehose_guardduty-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s-l')}b5b9b-ec62-4a07-85d7-b1699b9c031e.zip`
                }
                alert.data.aws.description = interpolateAlertProps(alert.data.aws.description, alert);
                alert.data.aws.title = interpolateAlertProps(alert.data.aws.title, alert);
                alert.data.aws.accountId = randomArrayItem(AWS.accountId);
                alert.data.aws.createdAt = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
                alert.data.aws.service.action.networkConnectionAction.remoteIpDetails = {...randomArrayItem(AWS.remoteIpDetails)}
                alert.data.aws.service.eventFirstSeen = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
                alert.data.aws.service.eventLastSeen = formatDate(new Date(alert.timestamp), 'Y-M-DTh:m:s.lZ');
                alert.data.aws.service.additionalInfo = {
                    localPort: `${randomArrayItem(Ports)}`,
                    outBytes: `${randomIntervalInteger(1000,3000)}`,
                    inBytes: `${randomIntervalInteger(1000,10000)}`,
                    unusual: `${randomIntervalInteger(1000,10000)}`
                };
                alert.data.aws.service.count = `${randomIntervalInteger(400,4000)}`;
                alert.data.aws.service.action.networkConnectionAction.localIpDetails.ipAddressV4 = alert.data.aws.resource.instanceDetails.networkInterfaces.privateIpAddress;

                alert.rule = {...typeAlert.rule};
                alert.rule.firedtimes = randomIntervalInteger(1,50);
                alert.rule.description = interpolateAlertProps(typeAlert.rule.description, alert);

                alert.decoder = {...typeAlert.decoder};
                alert.location = typeAlert.location;
                break
            }
            case 'iamPolicyGrantGlobal': {
                const typeAlert = AWS.iamPolicyGrantGlobal;

                alert.data = { ...typeAlert.data };
                alert.data.integration = 'aws';
                alert.data.aws.summary.Timestamps = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
                alert.data.aws.log_info = {
                    s3bucket: 'wazuh-aws-wodle',
                    log_file: `macie/${formatDate(new Date(alert.timestamp), 'Y/M/D/h')}/firehose_macie-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s')}-0b1ede94-f399-4e54-8815-1c6587eee3b1//firehose_guardduty-1-${formatDate(new Date(alert.timestamp), 'Y-M-D-h-m-s-l')}b5b9b-ec62-4a07-85d7-b1699b9c031e.zip`,
                };
                alert.data.aws["created-at"] = formatDate(beforeDate, 'Y-M-DTh:m:s.lZ');
                
                alert.rule = {...typeAlert.rule};
                alert.rule.firedtimes = randomIntervalInteger(1,50);

                alert.decoder = {...typeAlert.decoder};
                alert.location = typeAlert.location;
                break
            }
            default: {}
        }
    }

    if (params.audit) {
        alert.rule.groups.push('audit');
        alert.data.audit = {};
        alert.data.audit.command = randomArrayItem(Audit.command);
        alert.data.audit.file = { name: randomArrayItem(Audit.fileName) };
        alert.data.audit.exe = randomArrayItem(Audit.exe);
        alert.rule.description = randomArrayItem(Audit.ruleDescription);
        alert.rule.description = alert.rule.description === 'Audit: Command: ' ? `Audit: Command: ${alert.rule.description}` : alert.rule.description;
    }

    if (params.ciscat) {
        alert.rule.groups.push("ciscat");
        alert.data.cis = {};

        alert.data.cis.group = randomArrayItem(CISCAT.group);
        alert.data.cis.fail = randomIntervalInteger(0, 100);
        alert.data.cis.rule_title = randomArrayItem(CISCAT.ruleTitle);
        alert.data.cis.notchecked = randomIntervalInteger(0, 100);
        alert.data.cis.score = randomIntervalInteger(0, 100);
        alert.data.cis.pass = randomIntervalInteger(0, 100);
        alert.data.cis.timestamp = new Date(randomDate());
        alert.data.cis.error = randomIntervalInteger(0, 1);
        alert.data.cis.benchmark = randomArrayItem(CISCAT.benchmark);
        alert.data.cis.unknown = randomIntervalInteger(0, 1);
        alert.data.cis.result = randomArrayItem(CISCAT.result);
    }

    if (params.docker) {
        alert.rule.groups.push("docker");
        alert.data.docker = {};
        alert.data.docker.Actor = {};
        alert.data.docker.Actor.Attributes = {};

        alert.data.docker.Actor.Attributes.image = randomArrayItem(Docker.actorAttributesImage);
        alert.data.docker.Actor.Attributes.name = randomArrayItem(Docker.actorAttributesName);
        alert.data.docker.Type = randomArrayItem(Docker.type);
        alert.data.docker.Action = randomArrayItem(Docker.action);
    }

    if (params.mitre) {
        alert.rule.mitre = {
            id: randomUniqueValuesFromArray(Mitre.id, 3).sort(),
            tactics: randomUniqueValuesFromArray(Mitre.tactics, 3).sort()
        }
        //TODO: add info
    }

    if (params.openscap) {
        alert.rule.groups.push("oscap");
        alert.data.oscap = {};
        alert.data.oscap.scan = {};
        alert.data.oscap.scan.profile = {};
        alert.data.oscap.check = {};

        alert.data.oscap.scan.profile.title = randomArrayItem(OpenSCAP.scanProfileTitle);
        alert.data.oscap.scan.content = randomArrayItem(OpenSCAP.scanContent);
        alert.data.oscap.scan.score = randomIntervalInteger(50, 80);
        alert.data.oscap.check.result = randomArrayItem(OpenSCAP.checkResult);
        alert.data.oscap.check.severity = randomArrayItem(OpenSCAP.checkSeverity);
        alert.data.oscap.check.title = randomArrayItem(OpenSCAP.checkTitle);
    }

    if (params.rootcheck) {
        alert.rule.groups.push('rootcheck');
        alert.rule.description = randomArrayItem(PolicyMonitoring.ruleDescription);
        alert.data.title = randomArrayItem(PolicyMonitoring.title);
    }

    if (params.syscheck) {
        alert.rule.groups.push("syscheck");
        alert.syscheck = {};
        alert.syscheck.event = randomArrayItem(IntegrityMonitoring.events);
        alert.syscheck.path = randomArrayItem(Paths);
        alert.syscheck.uname_after = randomArrayItem(Users);
    }

    if (params.virustotal) {
        alert.rule.groups.push("virustotal");
        alert.data.virustotal = {};
        alert.data.virustotal.source = {};
        alert.data.virustotal.source.file = randomArrayItem(Virustotal.sourceFile);;
        alert.data.virustotal.permalink = randomArrayItem(Virustotal.permalink);;
        alert.data.virustotal.source.md5 = randomArrayItem(Virustotal.sourceMd5);
        alert.data.virustotal.malicious = randomArrayItem(Virustotal.malicious);
        alert.data.virustotal.positives = `${randomIntervalInteger(0,20)}`;
    }

    if (params.vulnerabilities) {
        alert.rule.groups.push("vulnerability-detector");
        alert.data.vulnerability = {};
        alert.data.vulnerability.package = {};

        alert.data.vulnerability.package.name = randomArrayItem(Vulnerability.packageName);
        alert.data.vulnerability.cwe_reference = randomArrayItem(Vulnerability.cweReference);
        const dataVulnerability = randomArrayItem(Vulnerability.data);
        alert.data.vulnerability.severity = dataVulnerability.severity;
        alert.data.vulnerability.state = dataVulnerability.state;
        alert.data.vulnerability.cve = dataVulnerability.cve;
        alert.data.vulnerability.title = dataVulnerability.title;
        alert.rule.description = dataVulnerability.title;
        alert.data.vulnerability.reference = dataVulnerability.reference;
    }
    
    if (params.osquery) {
        alert.rule.groups.push("osquery");
        alert.rule.description = randomArrayItem(Osquery.ruleDescription);
        alert.data.osquery = {};

        alert.data.osquery.name = randomArrayItem(Osquery.name);
        alert.data.osquery.action = randomArrayItem(Osquery.action);
        alert.data.osquery.calendarTime = new Date(randomDate());
        alert.data.osquery.pack = randomArrayItem(Osquery.pack);
    }

    if (params.win_authentication_failed || (params.probability_win_authentication_failed && randomProbability(params.probability_win_authentication_failed))){
        alert.rule.groups.push('win_authentication_failed')
    }

    if (params.authentication_failed || (params.probability_authentication_failed && randomProbability(params.probability_authentication_failed))){
        alert.rule.groups.push('authentication_failed')
    }

    if (params.authentication_failures || (params.probability_authentication_failures && randomProbability(params.probability_authentication_failures))){
        alert.rule.groups.push('authentication_failures')
    }

    // Regulatory compliance
    if (params.pci_dss || params.regulatory_compliance || (params.random_probability_regulatory_compliance && randomProbability(params.random_probability_regulatory_compliance))) {
        alert.rule.pci_dss = [randomArrayItem(PCI_DSS)];
    }
    if (params.gdpr || params.regulatory_compliance || (params.random_probability_regulatory_compliance && randomProbability(params.random_probability_regulatory_compliance))) {
        alert.rule.gdpr = [randomArrayItem(GDPR)];
    }
    if (params.gpg13 || params.regulatory_compliance || (params.random_probability_regulatory_compliance && randomProbability(params.random_probability_regulatory_compliance))) {
        alert.rule.gpg13 = [randomArrayItem(GPG13)];
    }
    if (params.hipaa || params.regulatory_compliance || (params.random_probability_regulatory_compliance && randomIntervalInteger(params.random_probability_regulatory_compliance))) {
        alert.rule.hipaa = [randomArrayItem(HIPAA)];
    }
    if (params.nist_800_83 || params.regulatory_compliance || (params.random_probability_regulatory_compliance && randomIntervalInteger(params.random_probability_regulatory_compliance))) {
        alert.rule.nist_800_53 = [randomArrayItem(NIST_800_53)];
    }

    if (params.authentication) {
        alert.data = {
            srcip: randomArrayItem(IPs),
            srcuser: randomArrayItem(Users),
            srcport: randomArrayItem(Ports)
        };
        alert.GeoLocation = randomArrayItem(GeoLocation);
        alert.decoder = {
            name: 'sshd',
            parent: 'sshd'
        };
        alert.input = {
            type: 'log'
        };
        alert.predecoder = {
            program_name: 'sshd',
            timestamp: formatDate(new Date(alert.timestamp), 'J D h:m:s'),
            hostname: alert.manager.name
        };
        let typeAlert = randomArrayItem(['invalidLoginPassword','invalidLoginUser', 'multipleAuthenticationFailures','windowsInvalidLoginPassword','userLoginFailed', 'passwordCheckFailed', 'nonExistentUser', 'bruteForceTryingAccessSystem', 'authenticationSuccess', 'maximumAuthenticationAttemptsExceeded']);
        
        switch (typeAlert){
            case 'invalidLoginPassword':{
                alert.location = Authentication.invalidLoginPassword.location;
                alert.rule = {...Authentication.invalidLoginPassword.rule};
                alert.rule.groups = [...Authentication.invalidLoginPassword.rule.groups];
                alert.full_log = interpolateAlertProps(Authentication.invalidLoginPassword.full_log, alert);
                break
            }
            case 'invalidLoginUser':{
                alert.location = Authentication.invalidLoginUser.location;
                alert.rule = {...Authentication.invalidLoginUser.rule};
                alert.rule.groups = [...Authentication.invalidLoginUser.rule.groups];
                alert.full_log = interpolateAlertProps(Authentication.invalidLoginUser.full_log, alert);
                break
            }
            case 'multipleAuthenticationFailures':{
                alert.location = Authentication.multipleAuthenticationFailures.location;
                alert.rule = {...Authentication.multipleAuthenticationFailures.rule};
                alert.rule.groups = [...Authentication.multipleAuthenticationFailures.rule.groups];
                alert.rule.frequency = randomIntervalInteger(5,50);
                alert.full_log = interpolateAlertProps(Authentication.multipleAuthenticationFailures.full_log, alert);
                break
            }
            case 'windowsInvalidLoginPassword':{
                alert.location = Authentication.windowsInvalidLoginPassword.location;
                alert.rule = {...Authentication.windowsInvalidLoginPassword.rule };
                alert.rule.groups = [...Authentication.windowsInvalidLoginPassword.rule.groups];
                alert.rule.frequency = randomIntervalInteger(5,50);
                alert.data.win = {...Authentication.windowsInvalidLoginPassword.data_win};
                alert.data.win.eventdata.ipAddress = randomArrayItem(IPs);
                alert.data.win.eventdata.ipPort = randomArrayItem(Ports);
                alert.data.win.system.computer = randomArrayItem(Win_Hostnames);
                alert.data.win.system.eventID = `${randomIntervalInteger(1,600)}`;
                alert.data.win.system.eventRecordID = `${randomIntervalInteger(10000,50000)}`;
                alert.data.win.system.processID = `${randomIntervalInteger(1,1200)}`;
                alert.data.win.system.systemTime = alert.timestamp;
                alert.data.win.system.processID = `${randomIntervalInteger(1,1200)}`;
                alert.data.win.system.task = `${randomIntervalInteger(1,1800)}`;
                alert.data.win.system.threadID = `${randomIntervalInteger(1,500)}`;
                alert.full_log = interpolateAlertProps(Authentication.windowsInvalidLoginPassword.full_log, alert);
                break
            }
            case 'userLoginFailed':{
                alert.location = Authentication.userLoginFailed.location;
                alert.rule = {...Authentication.userLoginFailed.rule};
                alert.rule.groups = [...Authentication.userLoginFailed.rule.groups];
                alert.data = {
                    srcip: randomArrayItem(IPs),
                    dstuser: randomArrayItem(Users),
                    uid: `${randomIntervalInteger(0,50)}`,
                    euid: `${randomIntervalInteger(0,50)}`,
                    tty: "ssh"
                };
                alert.decoder = {...Authentication.userLoginFailed.decoder}
                alert.full_log = interpolateAlertProps(Authentication.userLoginFailed.full_log, alert);
                break
            }
            case 'passwordCheckFailed':{
                alert.location = Authentication.passwordCheckFailed.location;
                alert.rule = {...Authentication.passwordCheckFailed.rule};
                alert.rule.groups = [...Authentication.passwordCheckFailed.rule.groups];
                alert.data = {
                    srcuser: randomArrayItem(Users)
                };
                alert.predecoder.program_name = "unix_chkpwd";
                alert.decoder = {...Authentication.passwordCheckFailed.decoder};
                alert.full_log = interpolateAlertProps(Authentication.passwordCheckFailed.full_log, alert);
                break
            }
            case 'nonExistentUser':{
                alert.location = Authentication.nonExistentUser.location;
                alert.rule = {...Authentication.nonExistentUser.rule};
                alert.rule.groups = [...Authentication.nonExistentUser.rule.groups];
                alert.full_log = interpolateAlertProps(Authentication.nonExistentUser.full_log, alert);
                break
            }
            case 'bruteForceTryingAccessSystem':{
                alert.location = Authentication.bruteForceTryingAccessSystem.location;
                alert.rule = {...Authentication.bruteForceTryingAccessSystem.rule};
                alert.rule.groups = [...Authentication.bruteForceTryingAccessSystem.rule.groups];
                alert.full_log = interpolateAlertProps(Authentication.bruteForceTryingAccessSystem.full_log, alert);
                break
            }
            case 'reverseLoockupError':{
                alert.location = Authentication.reverseLoockupError.location;
                alert.rule = {...Authentication.reverseLoockupError.rule};
                alert.rule.groups = [...Authentication.reverseLoockupError.rule.groups];
                alert.data = {
                    srcip: randomArrayItem(IPs)
                };
                alert.full_log = interpolateAlertProps(Authentication.reverseLoockupError.full_log, alert);
            }
            case 'insecureConnectionAttempt':{
                alert.location = Authentication.insecureConnectionAttempt.location;
                alert.rule = {...Authentication.insecureConnectionAttempt.rule};
                alert.rule.groups = [...Authentication.insecureConnectionAttempt.rule.groups];
                alert.data = {
                    srcip: randomArrayItem(IPs),
                    srcport: randomArrayItem(Ports),
                };
                alert.full_log = interpolateAlertProps(Authentication.insecureConnectionAttempt.full_log, alert);
            }
            case 'authenticationSuccess':{
                alert.location = Authentication.authenticationSuccess.location;
                alert.rule = {...Authentication.authenticationSuccess.rule};
                alert.rule.groups = [...Authentication.authenticationSuccess.rule.groups];
                alert.data = {
                    srcip: randomArrayItem(IPs),
                    srcport: randomArrayItem(Ports),
                    dstuser: randomArrayItem(Users)
                };
                alert.full_log = interpolateAlertProps(Authentication.authenticationSuccess.full_log, alert);
            }
            case 'maximumAuthenticationAttemptsExceeded':{
                alert.location = Authentication.maximumAuthenticationAttemptsExceeded.location;
                alert.rule = {...Authentication.maximumAuthenticationAttemptsExceeded.rule};
                alert.rule.groups = [...Authentication.maximumAuthenticationAttemptsExceeded.rule.groups];
                alert.data = {
                    srcip: randomArrayItem(IPs),
                    srcport: randomArrayItem(Ports),
                    dstuser: randomArrayItem(Users)
                };
                alert.full_log = interpolateAlertProps(Authentication.maximumAuthenticationAttemptsExceeded.full_log, alert);
            }
            default: {}
        }
        alert.rule.firedtimes = randomIntervalInteger(2,15);
    }

    if( params.ssh ){
        alert.data = {
            srcip: randomArrayItem(IPs),
            srcuser: randomArrayItem(Users),
            srcport: randomArrayItem(Ports)
        };
        alert.GeoLocation = randomArrayItem(GeoLocation);
        alert.decoder = {
            name: 'sshd',
            parent: 'sshd'
        };
        alert.input = {
            type: 'log'
        };
        alert.predecoder = {
            program_name: 'sshd',
            timestamp: formatDate(new Date(alert.timestamp), 'J D h:m:s'),
            hostname: alert.manager.name
        };
        const typeAlert = randomArrayItem(SSH.data);
        alert.location = typeAlert.location;
        alert.rule = {...typeAlert.rule};
        alert.rule.groups = [...typeAlert.rule.groups];
        alert.rule.firedtimes = randomIntervalInteger(1,15);
        alert.full_log = interpolateAlertProps(typeAlert.full_log, alert);

    }

    if ( params.windows ){
        alert.rule.groups.push('windows');
        if(params.windows.service_control_manager){
            alert.predecoder = {
                program_name: 'WinEvtLog',
                timestamp: '2020 Apr 17 05:59:05'
            };
            alert.input = {
                type: 'log'
            };
            alert.data = {
                extra_data: 'Service Control Manager',
                dstuser: 'SYSTEM',
                system_name: randomArrayItem(Win_Hostnames),
                id: '7040',
                type: 'type',
                status: 'INFORMATION'
            }
            alert.rule.description = 'Windows: Service startup type was changed.'
            alert.rule.firedtimes = randomIntervalInteger(1,20);
            alert.rule.mail = false
            alert.rule.level = 3;
            alert.rule.groups.push('windows', 'policy_changed');
            alert.rule.pci = ['10.6'];
            alert.rule.hipaa = ['164.312.b'];
            alert.rule.gdpr = ['IV_35.7.d'];
            alert.rule.nist_800_53 = ['AU.6'];
            alert.rule.info = 'This does not appear to be logged on Windows 2000.';
            alert.location = 'WinEvtLog';
            alert.decoder = {
                parent: 'windows',
                name: 'windows'
            }
            alert.full_log = `2020 Apr 17 05:59:05 WinEvtLog: type: INFORMATION(7040): Service Control Manager: SYSTEM: NT AUTHORITY: ${alert.data.system_name}: Background Intelligent Transfer Service auto start demand start BITS ` //TODO: date
            alert.id = 18145;
            alert.fields = {
                timestamp: alert.timestamp
            };
        }

    }
    return alert;
}

/**
 * Get a random array with unique values
 * @param {[]} array Array to extract the values
 * @param {*} randomMaxRepetitions Number max of random extractions
 * @param {function} sort Funciton to seort elements
 * @return {*} Array with random values extracted of paramater array passed
 */
function randomUniqueValuesFromArray(array, randomMaxRepetitions = 1, sort){
    const repetitions = randomIntervalInteger(1, randomMaxRepetitions);
    const set = new Set();
    for (let i = 0; i < repetitions; i++) {
        set.add(array[randomIntervalInteger(0, array.length - 1)]);
    }
    return sort ? Array.from(set).sort(sort) : Array.from(set)
}

/**
 * Get a integer within a range 
 * @param {number} min - Minimum limit
 * @param {number} max - Maximum limit
 * @returns {number} - Randomized number in interval
 */
function randomIntervalInteger(min, max) {
    return Math.floor(Math.random() * (max - (min - 1))) + min;
}

/**
 * Generate random alerts
 * @param {*} params 
 * @param {number} numAlerts - Define number of alerts
 * @return {*} - Random generated alerts defined with params
 */
function generateAlerts(params, numAlerts = 1) {
    const alerts = [];
    for (let i = 0; i < numAlerts; i++) {
        alerts.push(generateAlert(params));
    }
    return alerts;
}

/**
 * Get a random Date in range(7 days ago - now)
 * @returns {date} - Random date in range (7 days ago - now)
 */
function randomDate(inf, sup) {

    const nowTimestamp = Date.now();
    const time = randomIntervalInteger(0, 604800000); // Random 7 days in miliseconds

    const unix_timestamp = nowTimestamp - time; // Last 7 days from now

    const lastWeek = new Date(unix_timestamp); 
    return formatDate(lastWeek, 'Y-M-DTh:m:s.l+0000')
}

// Format date
const formatterNumber = (number, zeros = 0) => ("0".repeat(zeros) + `${number}`).slice(-zeros);
const monthNames = {
    long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};
function formatDate(date, format){ // It could use "moment" library to format strings too
    const tokens = {
        'D': (d) => formatterNumber(date.getDate(), 2), // 01-31
        'M': (d) => formatterNumber(date.getMonth() + 1, 2), // 01-12
        'J': (d) => monthNames.long[date.getMonth()], // 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        'N': (d) => monthNames.short[date.getMonth()], // 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        'Y': (d) => date.getFullYear(), // 2020
        'h': (d) => formatterNumber(date.getHours(), 2), // 00-23
        'm': (d) => formatterNumber(date.getMinutes(), 2), // 00-59
        's': (d) => formatterNumber(date.getSeconds(), 2), // 00-59
        'l': (d) => formatterNumber(date.getMilliseconds(), 3) // 000-999
    }

    return format.split('').reduce((accum, token) => {
        if(tokens[token]){
            return accum + tokens[token](date)
        }
        return accum + token
    },'')
}

/**
 * 
 * @param {string} str String with interpolations
 * @param {*} alert Alert object
 * @param {*} extra Extra parameters to interpolate what aren't in alert objet. Only admit one level of depth
 */
function interpolateAlertProps(str, alert, extra = {}){
    const matches = str.match(/{([\w\._]+)}/g);
    return (matches && matches.reduce((accum, cur) => {
      const match = cur.match(/{([\w\._]+)}/);
      const items = match[1].split('.');
      const value = items.reduce((a,c) => (a && a[c]) || extra[c] || undefined, alert) || cur;
      return accum.replace(cur,value);
    }, str)) || str
}

/**
 * Return a random probability
 * @param {number} probability 
 * @param {number[=100]} maximum 
 */
function randomProbability(probability, maximum = 100){
    return randomIntervalInteger(0,maximum) <= probability
}

export {
    generateAlert,
    generateAlerts
};

/* Use:
    generateAlert(params)
    generateAlerts(params, numberAlerts)

Examples:

    // --------- Generate an alert ---------

    - Generate syscheck (Integrity monitoring) sample alert
    generateAlert({syscheck: true});
    
    - Generate syscheck alert with PCI DSS
    generateAlert({syscheck: true, pci_dss: true});
    
    - Generate OpenSCAP alert with manager name and cluster info
    generateAlert({openscap: true, manager: {name: 'mymanager'}, cluster: {name: 'mycluster', node: 'mynode'}});

    // --------- Generate multiple alerts ---------

    - Generate 1000 random alerts of Osquery
    generateAlerts({osquery: true}, 1000);

    - Generate 1000 random alerts of PCI DSS with manager name and cluster info
    generateAlerts({pci_dss: true, manager: {name: 'mymanager'}, cluster: {name: 'mycluster', node: 'mynode'}}, 1000);
*/