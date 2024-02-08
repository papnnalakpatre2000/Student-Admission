import React from 'react';
class DownloadFile extends React.Component {
    downloadPdf = () => {
      fetch('http://localhost:8080/documents/7')
        .then(response => response.blob())
        .then(blob => {
          // Create a temporary URL to the blob
          const url = window.URL.createObjectURL(new Blob([blob]));
          // Create a link element to initiate the download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'document.pdf');
          document.body.appendChild(link);
          link.click();
          // Clean up
          link.parentNode.removeChild(link);
        })
        .catch(error => console.error('Error downloading PDF:', error));
    };
  
    render() {
      return (
        <div>
          <button onClick={this.downloadPdf}>Download PDF</button>
        </div>
      );
    }
  }
  export default DownloadFile