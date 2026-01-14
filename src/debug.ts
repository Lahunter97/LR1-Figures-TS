import ShapeFactory from "./factory/ShapeFactory.ts";
import { Repository } from "./repository/Repository.ts";
import { ByNameSpec, FirstQuadrantSpec } from "./specifications/Specs.ts";


const Repo_test = new Repository()

const line_k1 = "RECT r1 0 0  3 0  3 2  0 2"
const line_k2 = "RECT r2 -2 -1  2 -1  2 1  -2 1"
const line_c = "CUBE c1 0 0 0 2"

const duck_1 = ShapeFactory.fromLine(line_k1)
const duck_2 = ShapeFactory.fromLine(line_k2)
const duck_3 = ShapeFactory.fromLine(line_c)

if (duck_1) Repo_test.add(duck_1)
if (duck_2) Repo_test.add(duck_2)
if (duck_3) Repo_test.add(duck_3)

console.log(Repo_test)
console.log(Repo_test.getAll())
console.log(Repo_test.getById("r1"))
console.log(Repo_test.getByName("RECT"))
console.log(Repo_test.getByName("CUBE"))

console.log(Repo_test.query(new ByNameSpec("RECT")))
console.log(Repo_test.query(new FirstQuadrantSpec()))
