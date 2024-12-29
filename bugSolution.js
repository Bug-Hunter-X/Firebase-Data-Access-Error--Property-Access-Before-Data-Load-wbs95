The solution involves using Promises and the `.then()` method to ensure that the data is loaded before accessing any properties of the document snapshot.  Here's how to fix the code:

```javascript
db.collection('yourCollection').doc('yourDoc').get().then((doc) => {
  if (doc.exists) {
    // Access properties here, they are guaranteed to be loaded
    const data = doc.data();
    console.log('Name:', data.name);
    console.log('Age:', data.age);
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```
This approach ensures that the code within the `.then()` block only executes after the document data has been successfully retrieved.