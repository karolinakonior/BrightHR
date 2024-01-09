export default function getDocumentsData() {
    return fetch('../data/documents.json')
        .then(response => response.json())
}