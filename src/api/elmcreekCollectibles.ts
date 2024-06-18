import { LatLngExpression } from "leaflet";
import { MAP_GAP_X, MAP_GAP_Y, MAP_UNITS } from "./constants";
import { remap } from "./utils";

export interface ElmcreekCollectible {
  x: number,
  y: number,
  type: ElmcreekCollectibleType,
  color: ElmcreekCollectibleColor,
  collected: boolean,
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
  { x: 1951, y: 536, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 439, y: 1440, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 564, y: 819, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1234, y: 280, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1179, y: 344, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 895, y: 87, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1305, y: 490, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 424, y: 1370, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1527, y: 1810, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1419, y: 231, type: ElmcreekCollectibleType.Tractor, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1404, y: 174, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1305, y: 490, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 1185, y: 2002, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1926, y: 1525, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 227, y: 394, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1153, y: 417, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 224, y: 1987, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1080, y: 213, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1437, y: 194, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1363, y: 1078, type: ElmcreekCollectibleType.Plow, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1343, y: 1074, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1409, y: 1146, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 411, y: 662, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1063, y: 987, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1211, y: 90, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1454, y: 176, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1410, y: 1076, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 151, y: 1570, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1655, y: 1133, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 461, y: 1422, type: ElmcreekCollectibleType.Seeder, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1091, y: 973, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1907, y: 1520, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 1549, y: 253, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1157, y: 1621, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1873, y: 2002, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1142, y: 402, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1236, y: 124, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1192, y: 1468, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1354, y: 256, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1577, y: 1709, type: ElmcreekCollectibleType.WaterTrailer, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1456, y: 173, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1081, y: 363, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 121, y: 402, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1876, y: 1062, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1990, y: 1090, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1211, y: 92, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 308, y: 1590, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1066, y: 1476, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1496, y: 294, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1356, y: 1560, type: ElmcreekCollectibleType.Harvester, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 2010, y: 857, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1963, y: 1531, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 1564, y: 169, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1657, y: 180, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1926, y: 1547, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 417, y: 1596, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 27, y: 769, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1078, y: 1965, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1229, y: 1967, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 908, y: 50, type: ElmcreekCollectibleType.Trailer, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1557, y: 236, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1226, y: 1968, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 970, y: 801, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 1980, y: 1998, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1988, y: 1852, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1485, y: 481, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1540, y: 1667, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1599, y: 1559, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1980, y: 1998, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 1192, y: 1468, type: ElmcreekCollectibleType.Pig, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1266, y: 1072, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1485, y: 481, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 690, y: 1562, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 472, y: 1300, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1599, y: 1559, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1088, y: 649, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 744, y: 136, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1958, y: 136, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 441, y: 651, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 82, y: 1109, type: ElmcreekCollectibleType.Sheep, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1599, y: 1559, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1859, y: 457, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 67, y: 1856, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 442, y: 691, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 1485, y: 481, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 690, y: 1562, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 1217, y: 2007, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 238, y: 2007, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 1564, y: 169, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 677, y: 568, type: ElmcreekCollectibleType.Cow, color: ElmcreekCollectibleColor.Magenta, collected: false },

  { x: 1279, y: 294, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Red, collected: false },
  { x: 1011, y: 1984, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Orange, collected: false },
  { x: 1485, y: 481, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Yellow, collected: false },
  { x: 27, y: 769, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Lime, collected: false },
  { x: 2030, y: 1177, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Green, collected: false },
  { x: 1297, y: 182, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Cyan, collected: false },
  { x: 18, y: 89, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Azure, collected: false },
  { x: 1189, y: 1057, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Blue, collected: false },
  { x: 18, y: 89, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Violet, collected: false },
  { x: 690, y: 1562, type: ElmcreekCollectibleType.Horse, color: ElmcreekCollectibleColor.Magenta, collected: false },
];

export default elmcreekCollectibles;
