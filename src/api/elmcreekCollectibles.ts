import { LatLngExpression } from "leaflet";
import { MAP_GAP_X, MAP_GAP_Y, MAP_UNITS } from "./constants";
import { remap } from "./utils";

export interface ElmcreekCollectible {
  x: number,
  y: number,
  type: ElmcreekCollectibleType,
  color: ElmcreekCollectibleColor,
}

export enum ElmcreekCollectibleType {
  Tractor,
  Plow,
  Seeder,
  WaterTrailer,
  Harvester,
  Trailer,
  Pig,
  Sheep,
  Cow,
  Horse,
};

export enum ElmcreekCollectibleColor {
  Red,
  Orange,
  Yellow,
  Lime,
  Green,
  Cyan,
  Azure,
  Blue,
  Violet,
  Magenta
}

const ELMCREEK_MAX_Y = 2050;
const ELMCREEK_MAX_X = 2050;

export function createPosition(x: number, y: number): LatLngExpression {
  const invertedY = Math.abs(ELMCREEK_MAX_Y - y);
  const correctedY = remap(invertedY, 0, ELMCREEK_MAX_Y, 0, MAP_UNITS - (MAP_GAP_Y * 2));
  const correctedX = remap(x, 0, ELMCREEK_MAX_X, 0, MAP_UNITS - (MAP_GAP_X * 2));

  return [correctedY + MAP_GAP_Y, correctedX + MAP_GAP_X];
}

const elmcreekCollectibles: ElmcreekCollectible[] = [
  { x: 1951, y: 536, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Red },
  { x: 439, y: 1440, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Orange },
  { x: 564, y: 819, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Yellow },
  { x: 1234, y: 280, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Lime },
  { x: 1179, y: 344, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Green },
  { x: 895, y: 87, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Cyan },
  { x: 1305, y: 490, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Azure },
  { x: 424, y: 1370, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Blue },
  { x: 1527, y: 1810, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Violet },
  { x: 1419, y: 231, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 1404, y: 174, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Red },
  { x: 1305, y: 490, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Orange },
  { x: 1185, y: 2002, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Yellow },
  { x: 1926, y: 1525, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Lime },
  { x: 227, y: 394, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Green },
  { x: 1153, y: 417, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Cyan },
  { x: 224, y: 1987, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Azure },
  { x: 1080, y: 213, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Blue },
  { x: 1437, y: 194, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Violet },
  { x: 1363, y: 1078, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 1343, y: 1074, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Red },
  { x: 1409, y: 1146, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Orange },
  { x: 411, y: 662, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Yellow },
  { x: 1063, y: 987, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Lime },
  { x: 1211, y: 90, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Green },
  { x: 1454, y: 176, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Cyan },
  { x: 1410, y: 1076, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Azure },
  { x: 151, y: 1570, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Blue },
  { x: 1655, y: 1133, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Violet },
  { x: 461, y: 1422, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 1091, y: 973, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Red },
  { x: 1907, y: 1520, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Orange },
  { x: 1549, y: 253, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Yellow },
  { x: 1157, y: 1621, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Lime },
  { x: 1873, y: 2002, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Green },
  { x: 1142, y: 402, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Cyan },
  { x: 1236, y: 124, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Azure },
  { x: 1192, y: 1468, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Blue },
  { x: 1354, y: 256, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Violet },
  { x: 1577, y: 1709, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 1456, y: 173, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Red },
  { x: 1081, y: 363, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Orange },
  { x: 121, y: 402, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Yellow },
  { x: 1876, y: 1062, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Lime },
  { x: 1990, y: 1090, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Green },
  { x: 1211, y: 92, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Cyan },
  { x: 308, y: 1590, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Azure },
  { x: 1066, y: 1476, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Blue },
  { x: 1496, y: 294, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Violet },
  { x: 1356, y: 1560, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 2010, y: 857, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Red },
  { x: 1963, y: 1531, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Orange },
  { x: 1564, y: 169, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Yellow },
  { x: 1657, y: 180, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Lime },
  { x: 1926, y: 1547, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Green },
  { x: 417, y: 1596, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Cyan },
  { x: 27, y: 769, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Azure },
  { x: 1078, y: 1965, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Blue },
  { x: 1229, y: 1967, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Violet },
  { x: 908, y: 50, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 1557, y: 236, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Red },
  { x: 1226, y: 1968, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Orange },
  { x: 970, y: 801, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Yellow },
  { x: 1980, y: 1998, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Lime },
  { x: 1988, y: 1852, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Green },
  { x: 1485, y: 481, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Cyan },
  { x: 1540, y: 1667, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Azure },
  { x: 1599, y: 1559, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Blue },
  { x: 1980, y: 1998, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Violet },
  { x: 1192, y: 1468, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 1266, y: 1072, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Red },
  { x: 1485, y: 481, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Orange },
  { x: 690, y: 1562, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Yellow },
  { x: 472, y: 1300, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Lime },
  { x: 1599, y: 1559, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Green },
  { x: 1088, y: 649, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Cyan },
  { x: 744, y: 136, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Azure },
  { x: 1958, y: 136, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Blue },
  { x: 441, y: 651, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Violet },
  { x: 82, y: 1109, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 1599, y: 1559, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Red },
  { x: 1859, y: 457, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Orange },
  { x: 67, y: 1856, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Yellow },
  { x: 442, y: 691, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Lime },
  { x: 1485, y: 481, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Green },
  { x: 690, y: 1562, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Cyan },
  { x: 1217, y: 2007, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Azure },
  { x: 238, y: 2007, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Blue },
  { x: 1564, y: 169, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Violet },
  { x: 677, y: 568, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Magenta },
  
  { x: 1279, y: 294, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Red },
  { x: 1011, y: 1984, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Orange },
  { x: 1485, y: 481, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Yellow },
  { x: 27, y: 769, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Lime },
  { x: 2030, y: 1177, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Green },
  { x: 1297, y: 182, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Cyan },
  { x: 18, y: 89, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Azure },
  { x: 1189, y: 1057, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Blue },
  { x: 18, y: 89, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Violet },
  { x: 690, y: 1562, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Magenta },
];

export default elmcreekCollectibles;