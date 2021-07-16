import React, { useContext } from "react";
import UserContext, { UserProvider } from "../../Context/userContext";
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

const PointsTable = () => {

  const { player, ptsTotal} = useContext(UserContext)
  console.log(player)

  return (
    <div className= "table-container">
    <div className="table-responsive">
    <table className="tg">
<thead>
  <tr>
    <th colSpan="2" className="tg-c3ow">{player.player}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td className="tg-zd5i"><FontAwesomeIcon icon={faDiceOne} />
    <span className="text-points">{player.pairOrTrio_1 + " pts"}</span>
    </td>
    <td className="tg-0pky"><img src={letraE} alt="letra-E" />
    <span className="text-points">{player.stair + " pts"}</span>
    </td>
  </tr>
  <tr>
    <td className="tg-0pky"><FontAwesomeIcon icon={faDiceTwo} />
    <span className="text-points">{player.pairOrTrio_2 + " pts"}</span>
    </td>
    <td className="tg-0pky"><img src={letraF} alt="letra-F" />
    <span className="text-points">{player.full + " pts"}</span>
    </td>
  </tr>
  <tr>
    <td className="tg-0pky"><FontAwesomeIcon icon={faDiceThree} />
    <span className="text-points">{player.pairOrTrio_3 + " pts"}</span>
    </td>
    <td className="tg-0pky"><img src={letraP} alt="letra-P" />
    <span className="text-points">{player.poker + " pts"}</span>
    </td>
  </tr>
  <tr>
    <td className="tg-0lax"><FontAwesomeIcon icon={faDiceFour} />
    <span className="text-points">{player.pairOrTrio_4 + " pts"}</span>
    </td>
  </tr>
  <tr>
    <td className="tg-0lax"><FontAwesomeIcon icon={faDiceFive} />
    <span className="text-points">{player.pairOrTrio_5 + " pts"}</span>
    </td>
  </tr>
  <tr>
    <td className="tg-0lax"><FontAwesomeIcon icon={faDiceSix} />
    <span className="text-points">{player.pairOrTrio_6 + " pts"}</span>
    </td>
  </tr>
  <tr>
    <td className="tg-0lax" colSpan="2">Result: {ptsTotal() + " pts"}</td>
  </tr>
</tbody>
</table>
      </div>
    </div>
  );
};

export default PointsTable;
