import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne } from "@fortawesome/free-solid-svg-icons";
import { faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";
import { faDiceFour } from "@fortawesome/free-solid-svg-icons";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";
import { faDiceSix } from "@fortawesome/free-solid-svg-icons";
import letraE from "../../assets/img/letra-E.ico";
import letraF from "../../assets/img/letra-F.ico";
import letraG from "../../assets/img/letra-G.ico";
import letraP from "../../assets/img/letra-P.ico";
import "../Table/pointsTable.css"

const PointsTable = ({player}) => {
  return (
    <>
    <div className="table-responsive">
    <table className="tg">
<thead>
  <tr>
    <th colSpan="2" className="tg-c3ow">{player}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td className="tg-zd5i"><FontAwesomeIcon icon={faDiceOne} />
    15Pts
    </td>
    <td className="tg-0pky"><img src={letraE} alt="letra-E" />
    15Pts
    </td>
  </tr>
  <tr>
    <td className="tg-0pky"><FontAwesomeIcon icon={faDiceTwo} />
    15Pts
    </td>
    <td className="tg-0pky"><img src={letraF} alt="letra-F" />
    15Pts
    </td>
  </tr>
  <tr>
    <td className="tg-0pky"><FontAwesomeIcon icon={faDiceThree} />
    15Pts
    </td>
    <td className="tg-0pky"><img src={letraP} alt="letra-P" />
    15Pts
    </td>
  </tr>
  <tr>
    <td className="tg-0lax"><FontAwesomeIcon icon={faDiceFour} />
    15Pts
    </td>
    <td className="tg-0lax"><img src={letraG} alt="letra-G" />
    15Pts
    </td>
  </tr>
  <tr>
    <td className="tg-0lax"><FontAwesomeIcon icon={faDiceFive} />
    15Pts
    </td>
  </tr>
  <tr>
    <td className="tg-0lax"><FontAwesomeIcon icon={faDiceSix} />
    15Pts
    </td>
  </tr>
  <tr>
    <td className="tg-0lax" colSpan="2">Result:</td>
  </tr>
</tbody>
</table>
      </div>
    </>
  );
};

export default PointsTable;
