import { useState, useEffect, useRef } from "react";

import TermsOfService from "../components/TermsOfService";
import { useNavigate } from "react-router-dom";

const PdfView = () => {
  const [unlocked, setUnlocked] = useState([true, false, false]);
  const [showModal, setShowModal] = useState(false);
  const [purchaseAllModal, setPurchaseAllModal] = useState(false);
  const [selectedPdfIndex, setSelectedPdfIndex] = useState(null);
  const [isScreenshoted, setIsScreenshoted] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const [showTerms, setShowTerms] = useState(true);
  const navigate = useNavigate();

  const [devToolsModal, setDevToolsModal] = useState(false);

  const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     setKeyboard(true);

  //     if (showModal) {
  //       console.log(showModal, "show modal value");
  //       alert("hello");
  //       event.preventDefault();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown, true);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown, true);
  //   };
  // }, [showModal]);

  const pdfs = [
    {
      id: 1,
      name: "Sample PDF",
      url: "https://digify.com/a/#/f/s/c0b1a2b66fe648bb93d2890da868de64",
      isFree: true,
    },
    {
      id: 2,
      name: "Premium PDF 1",
      url: "https://digify.com/a/#/f/s/00e4733eead64b5ea0be300712318477",
      isFree: true,
    },

    {
      id: 3,
      name: "Premium PDF 2",
      url: "https://digify.com/a/#/f/s/a93992524a7849f2863b26964f8721f5",
      isFree: false,
    },
  ];

  const openModal = (index) => {
    setSelectedPdfIndex(index);
    setShowModal(true);

    setShowTerms(false);
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

  const handleAccept = () => {
    setShowTerms(false);
    openModal();
  };

  const handleDecline = () => {
    alert(
      "You must accept the terms to access this content. Otherwise be stuck in a loop"
    );
    setShowTerms(true);
  };

  const unlockAllPdfs = () => {
    const allUnlocked = pdfs.map(() => true);
    setUnlocked(allUnlocked);
    closePurchaseAllModal();
  };

  // useEffect(() => {
  //   if (showModal) {
  //     document.body.classList.add("no-interaction");
  //   } else {
  //     document.body.classList.remove("no-interaction");
  //   }

  //   return () => {
  //     document.body.classList.remove("no-interaction");
  //   };
  // }, [showModal]);

  //   useEffect(() => {
  //     const handleKeyDown = (event) => {
  //       // Disable Print Screen (PrtScn)
  //       if (event.key === "PrintScreen") {
  //         event.preventDefault();
  //         console.log("Print Screen is disabled");
  //       }

  //       // Disable Windows + Print Screen (captures the entire screen)
  //       if (event.key === "PrintScreen" && event.ctrlKey) {
  //         event.preventDefault();
  //         console.log("Windows + Print Screen is disabled");
  //       }

  //       // Disable Windows + Space (if applicable for some devices)
  //       if (event.key === "Space" && event.metaKey && event.ctrlKey) {
  //         event.preventDefault();
  //         console.log("Windows + Space is disabled");
  //       }
  //     };

  //     window.addEventListener("keydown", handleKeyDown);

  //     return () => {
  //       window.removeEventListener("keydown", handleKeyDown);
  //     };
  //   }, []);

  // useEffect(() => {
  //   const detectDevTools = () => {
  //     const threshold = 160; // Height threshold for detecting dev tools
  //     const isDevToolsOpen =
  //       window.outerHeight - window.innerHeight > threshold ||
  //       window.outerWidth - window.innerWidth > threshold;

  //     if (isDevToolsOpen) {
  //       setDevToolsModal(true);
  //     } else {
  //       setDevToolsModal(false);
  //     }
  //   };

  //   window.addEventListener("resize", detectDevTools);
  //   detectDevTools();

  //   return () => {
  //     window.removeEventListener("resize", detectDevTools);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleKeyUp = (event) => {
  //     if (event.key === "PrintScreen") {
  //       alert(
  //         "Warning : SCREENSHOT was captured. One More SCREENSHOT and your subscription will end abruptly."
  //       );

  //       document.body.style.filter = "blur(100px)";
  //       navigator.clipboard.writeText("");
  //       alert("Screenshot detected. Blurring content.");

  //       setTimeout(() => {
  //         document.body.style.filter = "none";
  //       }, 2000);

  //       alert("Screenshots are disabled.");

  //       navigate("/login");
  //     }
  //   };

  //   window.addEventListener("keyup", handleKeyUp);

  //   return () => {
  //     window.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, []);

  // useEffect(() => {
  //   const disableContextMenu = (e) => e.preventDefault();
  //   document.addEventListener("contextmenu", disableContextMenu);

  //   const disableDevToolsKeys = (e) => {
  //     if (
  //       e.keyCode === 123 || // F12
  //       (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
  //       (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
  //       e.key === "PrintScreen" // PrintScreen
  //     ) {
  //       e.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", disableDevToolsKeys);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableContextMenu);
  //     document.removeEventListener("keydown", disableDevToolsKeys);
  //   };
  // }, []);

  return (
    <div className="px-10 py-10">
      <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center p-4 z-50">
        <p>
          📸 Screenshots or screen recording of this content is prohibited.
          Misuse may result in legal consequences and punishable by law.
        </p>
      </div>

      <div className="mt-20">
        {showTerms && (
          <TermsOfService onAccept={handleAccept} onDecline={handleDecline} />
        )}
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-12">
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
                // onClick={() => openModal(index)}
                className="text-blue-500 underline"
              >
                View PDF
              </a>
            ) : (
              <button
                disabled
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Locked
              </button>
            )}
          </div>
        ))}
      </div>

      {keyboard ? (
        <h1> Dont Press Any Key </h1>
      ) : (
        <div>
          {showModal && unlocked[selectedPdfIndex] && (
            <div
              ref={modalRef}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center sensitive-content"
            >
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

                <div className="watermark">Shubham ki PDF</div>

                {/* Modal Content */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 max-h-[90vh] overflow-hidden flex flex-col items-center">
                  <h2 className="text-xl font-bold mb-4">
                    {pdfs[selectedPdfIndex].name}
                  </h2>

                  {/* <iframe
                    // src={`https://docs.google.com/gview?url=${pdfs[selectedPdfIndex].url}&embedded=true`}
                    // src={pdfs[selectedPdfIndex].url}
                    src="https://digify.com/a/#/f/s/c0b1a2b66fe648bb93d2890da868de64"
                    title="PDF Viewer"
                    className="w-full h-[70vh] border"
                    sandbox="allow-scripts allow-cross-origin"
                    style={{ overflowY: "scroll" }}
                  ></iframe> */}

                  <a href={pdfs[selectedPdfIndex].url} target="_blank">
                    Link
                  </a>

                  <button
                    onClick={closeModal}
                    className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 pointer-events-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
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

      {/* Purchase All Modal */}
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

      {/* Dev Tools Modal */}
      {devToolsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Developer Tools Detected</h2>
            <p className="text-gray-700 mb-6">
              Please close developer tools to view the content.
            </p>
            <button
              disabled
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfView;
