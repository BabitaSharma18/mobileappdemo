export default function CreateEntity(clientAPI) {
    return clientAPI.executeAction({
        'Name': '/samplemdk/Actions/mobileappazeem/Products/Products_CreateEntity.action',
        'Properties': {
            'OnSuccess': ''
        }
    }).then((result) => {
        let newEntity = JSON.parse(result.data);
        return clientAPI.executeAction({
            'Name': '/samplemdk/Actions/mobileappazeem/Products/Products_UploadStream.action',
            'Properties': {
                'Target': {
                    'ReadLink': newEntity['@odata.readLink']
                }
            }
        });
    });
}