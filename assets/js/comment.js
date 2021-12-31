

const rootRef = firebase.database().ref();
const commentsRef = rootRef.child('comments');
document.getElementById("btnSubmitComment").addEventListener("click", function () {
    var newcomment = document.getElementById('txComment').value.replace(/\n/g, "<br>");
    var newPostRef = commentsRef.push();
    newPostRef.set({
        name: document.getElementById('tbName').value.trim(),
        comment: newcomment.trim(),
        frompage: location.pathname,
        when: firebase.database.ServerValue.TIMESTAMP
    });

});

function showpastcomments() {
    var showat = document.getElementById('pastcomments');
    //Get comments whose from page equals this page's pathname.
    var commentsRef = firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
    commentsRef.once('value', function (snapshot) {
        snapshot.forEach(function (itemSnapshot) {
            //Get the object for one snapshot
            var itemData = itemSnapshot.val();
            var comment = itemData.comment;
            var name = itemData.name;
            var when = new Date(itemData.when).toLocaleDateString("en-us");
            showat.innerHTML += "<li>" + comment + "<span> -- " + name + " (" + when +
                ")</span></li>";
        })
    })
}