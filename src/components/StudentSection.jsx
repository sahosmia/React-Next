import { classData1, classData2, classData3 } from "../data";
import StudentListByClass from "./StudentListByClass";
import StudentSearchBox from "./StudentSearchBox";

const StudentSection = () => {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h1 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h1>
          <StudentSearchBox></StudentSearchBox>
        </div>

        {/* Student List start  */}
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              <StudentListByClass
                classNameTitle="Class One"
                students={classData1}
              />
              <StudentListByClass
                classNameTitle="Class Two"
                students={classData2}
              />
              <StudentListByClass
                classNameTitle="Class Three"
                students={classData3}
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
