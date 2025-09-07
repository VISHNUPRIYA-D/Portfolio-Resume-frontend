import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Portfolio1Export } from "../portfolioExports/Portfolio1Export";
import { Portfolio2Export } from "../portfolioExports/Portfolio2Export";
import { Portfolio5Export } from "../portfolioExports/Portfolio5Export";
import { Portfolio3Export } from "../portfolioExports/Portfolio3Export";
import { Portfolio4Export } from "../portfolioExports/Portfolio4Export";
import { Portfolio6Export } from "../portfolioExports/Portfolio6Export";
import { Portfolio7Export } from "../portfolioExports/Portfolio7Export";
import { Portfolio8Export } from "../portfolioExports/Portfolio8Export";
import { Portfolio9Export } from "../portfolioExports/Portfolio9Export";
import { Portfolio10Export } from "../portfolioExports/Portfolio10Export";

const ExportPortfolio = ({ user, def, selectedTemplate,menuOpen }) => {
  const handleExport = async () => {
    let html;

    switch (selectedTemplate) {
      case 1:
        html = Portfolio1Export(user, def);
        break;
      case 2:
        html = Portfolio2Export(user, def,menuOpen);
        break;
      case 3:
        html = Portfolio3Export(user,def); 
        break; 
      case 4:
        html = Portfolio4Export(user,def);  
        break;
      case 5:
        html = Portfolio5Export(user,def);  
        break;
      case 6:
        html = Portfolio6Export(user,def);
        break;
      case 7:
        html = Portfolio7Export(user,def);
        break;
      case 8:
        html = Portfolio8Export(user,def);
        break;
      case 9:
        html = Portfolio9Export(user,def);
        break;
      case 10:
        html = Portfolio10Export(user,def);
        break;
      default:
        html = Portfolio1Export(user, def); // fallback
    }

    const zip = new JSZip();
    zip.file("index.html", html);

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "portfolio-site.zip");
  };

  return (
    <button
      onClick={handleExport}
      className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md"
    >
      Export Portfolio as Website
    </button>
  );
};

export default ExportPortfolio;
