function generateZoomLink() {
    const meetingTitle = document.getElementById('meetingTitle').value;
    const meetingDate = document.getElementById('meetingDate').value;
    const meetingTime = document.getElementById('meetingTime').value;
    const meetingDuration = document.getElementById('meetingDuration').value;
    const meetingDescription = document.getElementById('meetingDescription').value;

    const zoomLink = `https://zoom.us/j/your-meeting-id?pwd=your-password`;

    const zoomLinkContainer = document.getElementById('zoomLinkContainer');
    zoomLinkContainer.innerHTML = `
        <p>Meeting scheduled successfully!</p>
        <p><strong>${meetingTitle}</strong></p>
        <p>Date: ${meetingDate}</p>
        <p>Time: ${meetingTime}</p>
        <p>Duration: ${meetingDuration} minutes</p>
        <p>Description: ${meetingDescription}</p>
        <p><a href="${zoomLink}" target="_blank">Join Zoom Meeting</a></p>
    `;
}
