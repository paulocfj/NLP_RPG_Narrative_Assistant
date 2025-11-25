import React from 'react';
import { FileText } from 'lucide-react';
import { toJpeg } from 'html-to-image';
import jsPDF from 'jspdf';

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

    const pdfName = fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`;
    const footerElement = element.querySelector('footer');

    if (footerElement instanceof HTMLElement) {
      footerElement.style.display = 'none';
    }

    try {
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
      console.error('Falha ao gerar o PDF com html-to-image:', error);
      alert('Erro ao gerar o PDF. Utilize outro navegador se possível');
    } finally {
      if (footerElement instanceof HTMLElement) {
        footerElement.style.display = 'flex';
      }
    }
  };

  const isDisabled = !targetRef.current;

  return (
    <button
      onClick={handleDownloadPDF}
      disabled={isDisabled}
      className={`
        px-6 py-2 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2 shadow-lg

        ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}

        // Cores Hexadecimais para evitar problemas de compatibilidade
        ${
          isDisabled
            ? 'bg-gray-500 text-white'
            : 'bg-[#4B5563] hover:bg-[#374151] text-white'
        }
        ${className}
      `}
    >
      <FileText size={20} />
      Baixar Roteiro (.pdf)
    </button>
  );
};

export { DownloadButton };
