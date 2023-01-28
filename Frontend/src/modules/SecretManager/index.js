// Import the Secret Manager client and instantiate it:
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// parent = 'projects/my-project', // Project for which to manage secrets.
// secretId = 'foo', // Secret ID.
// payload = 'hello world!' // String source data.

async function createAndAccessSecretExample() {
  // Create the secret with automation replication.
  const [secret] = await client.createSecret({
    parent: parent,
    secret: {
      name: secretId,
      replication: {
        automatic: {},
      },
    },
    secretId,
  });

  console.info(`Created secret ${secret.name}`);

  // Add a version with a payload onto the secret.
  const [version] = await client.addSecretVersion({
    parent: secret.name,
    payload: {
      data: Buffer.from(payload, 'utf8'),
    },
  });

  console.info(`Added secret version ${version.name}`);

  // Access the secret.
  const [accessResponse] = await client.accessSecretVersion({
    name: version.name,
  });

  const responsePayload = accessResponse.payload.data.toString('utf8');
  console.info(`Payload: ${responsePayload}`);
}

async function getSecret(secretName) {
    // Access the secret.
    const [accessResponse] = await client.accessSecretVersion({
        name: `projects/encoded-road-275921/secrets/${secretName}/versions/1`,
    });

    const responsePayload = accessResponse.payload.data.toString('utf8');
    return responsePayload
}



if (module === require.main) {
    createAndAccessSecretExample();
}

module.exports.getSecret = getSecret