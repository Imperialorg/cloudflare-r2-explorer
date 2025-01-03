async function fetchBucketContents() {
    const response = await fetch('https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/r2/buckets/YOUR_BUCKET_NAME/objects', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    displayBucketContents(data);
}

function displayBucketContents(data) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';
    data.objects.forEach(object => {
        const objectDiv = document.createElement('div');
        objectDiv.textContent = object.key;
        appDiv.appendChild(objectDiv);
    });
}

async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/r2/buckets/YOUR_BUCKET_NAME/objects', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        },
        body: formData
    });

    if (response.ok) {
        fetchBucketContents();
    } else {
        console.error('Failed to upload file');
    }
}

async function deleteFile(fileName) {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/r2/buckets/YOUR_BUCKET_NAME/objects/${fileName}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        }
    });

    if (response.ok) {
        fetchBucketContents();
    } else {
        console.error('Failed to delete file');
    }
}

async function renameFile(oldFileName, newFileName) {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/r2/buckets/YOUR_BUCKET_NAME/objects/${oldFileName}`, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: newFileName })
    });

    if (response.ok) {
        fetchBucketContents();
    } else {
        console.error('Failed to rename file');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchBucketContents();
});
