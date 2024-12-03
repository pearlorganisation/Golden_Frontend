import React from "react";

const PostPaymentPDFView = () => {
  const pdfs = [
    {
      id: 1,
      name: "PDF 1",
      url: "https://digify.com/a/#/f/s/c0b1a2b66fe648bb93d2890da868de64",
    },
    {
      id: 2,
      name: "PDF 2",
      url: "https://digify.com/a/#/f/s/4536cd5724f64c9aaad0dd03232534c7",
    },
    {
      id: 3,
      name: "PDF 3",
      url: "https://digify.com/a/#/f/s/8b6d85c8d22342ef9dd96529591ec07b",
    },
  ];
  return (
    <div>
      <h1>Post Payment PDF</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-blue-300"></div>
      {pdfs.map((pdf) => (
        <div className="bg-white" key={pdf.id}>
          <h1 className=""> {pdf.name}</h1>

          <iframe
            // src={`https://docs.google.com/gview?url=${pdfs[selectedPdfIndex].url}&embedded=true`}
            src={pdfs.url}
            title="PDF Viewer"
            className="w-full h-[50vh] border"
            sandbox="allow-scripts allow-same-origin"
            style={{ overflowY: "scroll" }}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default PostPaymentPDFView;
