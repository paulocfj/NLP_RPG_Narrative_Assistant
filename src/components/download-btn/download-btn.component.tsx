import React from 'react';
import { FileText } from 'lucide-react';

/**
 * @interface DownloadButtonProps
 * @description Props for the DownloadButton component.
 */
type DownloadButtonProps = {
  /**
   * @property {React.RefObject<HTMLElement | null>} targetRef - The ref of the DOM element
   * containing the content to be converted to PDF.
   */
  targetRef: React.RefObject<HTMLElement | null>;

  /**
   * @property {string} fileName - The desired name for the downloaded PDF file.
   */
  fileName: string;

  /**
   * @property {string} [className] - Optional Tailwind CSS classes for custom styling.
   */
  className?: string;
};

const DownloadButton = ({
  targetRef,
  fileName,
  className = '',
}: DownloadButtonProps) => {
  const handleDownloadPDF = async () => {
    const element = targetRef.current;
    if (!element) return;

    try {
      const [htmlToImageModule, jsPDFModule] = await Promise.all([
        import('html-to-image'),
        import('jspdf'),
      ]);

      const { toJpeg } = htmlToImageModule;
      const jsPDF = jsPDFModule.default;

      const pdfName = fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`;
      const footerElement = element.querySelector('footer');

      if (footerElement instanceof HTMLElement) {
        footerElement.style.display = 'none';
      }

      const imgData = await toJpeg(element, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#111827',
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfPageHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfPageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfPageHeight;
      }

      pdf.save(pdfName);
    } catch (error) {
      console.error('Falha ao gerar o PDF com importação dinâmica:', error);
      alert('Erro ao gerar o PDF. Verifique a conexão e tente novamente.');
    } finally {
      const footerElement = element?.querySelector('footer');
      if (footerElement instanceof HTMLElement) {
        footerElement.style.display = 'flex';
      }
    }
  };

  const isDisabled = !targetRef.current;

  return (
    <button
      type="button"
      onClick={handleDownloadPDF}
      disabled={isDisabled}
      className={`
        px-6 py-2 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2 shadow-lg font-extrabold text-yellow-400

        ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}

        ${
          isDisabled
            ? 'text-gray-500 bg-gray-700/30 cursor-not-allowed'
            : 'bg-yellow-800/80 hover:bg-yellow-900 text-yellow-300 cursor-pointer'
        }
        ${className}
      `}
    >
      <FileText size={25} />
      <span className="font-semibold">Baixar Roteiro (.pdf)</span>
    </button>
  );
};

export { DownloadButton };
