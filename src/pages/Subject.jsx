import React, { useState } from "react";

const Subject = () => {
  const [unlocked, setUnlocked] = useState([true, false, false]);
  const [showModal, setShowModal] = useState(false);
  const [purchaseAllModal, setPurchaseAllModal] = useState(false);
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(null);

  const pdfs = [
    {
      id: 1,
      name: "Sample PDF",
      url: "https://res.cloudinary.com/dapjyizvj/raw/upload/v1731996423/Bazar91/zxfwyverrsb4fc5qhrpw.pdf",
      isFree: true,
    },
    {
      id: 2,
      name: "Premium PDF 1",
      url: "https://res.cloudinary.com/dapjyizvj/raw/upload/v1731920199/uploads/dqps2hqe9atxgkbs2ize.pdf",
      isFree: false,
    },
    {
      id: 3,
      name: "Premium PDF 2",
      url: "https://res.cloudinary.com/dapjyizvj/raw/upload/v1731753502/Bazar91/rkri8xhijkaftq4lckrm.pdf",
      isFree: false,
    },
  ];

  const openModal = (index) => {
    setSelectedPdfIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPdfIndex(null);
  };

  const openPurchaseAllModal = () => {
    setPurchaseAllModal(true);
  };

  const closePurchaseAllModal = () => {
    setPurchaseAllModal(false);
  };

  const confirmPurchase = () => {
    const newUnlocked = [...unlocked];
    newUnlocked[selectedPdfIndex] = true;
    setUnlocked(newUnlocked);
    closeModal();
  };

  const unlockAllPdfs = () => {
    const allUnlocked = pdfs.map(() => true); // Set all entries to true
    setUnlocked(allUnlocked);
    closePurchaseAllModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Purchase Only the PDFs you need
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pdfs.map((pdf, index) => (
          <div
            key={pdf.id}
            className="p-4 border rounded shadow-lg flex flex-col items-center"
          >
            <h2 className="text-lg font-semibold mb-2">{pdf.name}</h2>
            {unlocked[index] ? (
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Open PDF
              </a>
            ) : (
              <button
                onClick={() => openModal(index)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Unlock for Rs. 12
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Custom Tailwind Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Confirm Purchase</h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to unlock this single PDF for Rs. 12?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmPurchase}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Confirm
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12">
        <button
          onClick={openPurchaseAllModal}
          className="bg-pink-500 text-black px-4 py-2 rounded hover:bg-pink-600"
        >
          Unlock All for Rs. 30
        </button>
      </div>

      {purchaseAllModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Confirm Purchase</h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to unlock all PDFs for Rs. 30?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={unlockAllPdfs}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Confirm
              </button>
              <button
                onClick={closePurchaseAllModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subject;
