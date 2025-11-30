//
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const AddCoffee = () => {
  return (
    <div className="w-[1320px] mx-auto mt-12">
      {/* .raleway .rancho  */}

      <div className="w-full">
        <Link
          to="/"
          className="inline-flex  gap-4 items-center mb-[50px] hover:bg-[#D2B48C] py-4 rounded-xl pr-2.5"
        >
          <span className="h-6 w-6">
            <ArrowLeft></ArrowLeft>
          </span>
          <h3 className="text-[#374151] rancho text-3xl ">Back to home</h3>
        </Link>

        <div className="bg-[#F4F3F0]">
          <div>
            <h2 className="py-16 rancho text-[45px] text-[#374151] text-center">
              Add New Coffee
            </h2>
            <p className="text-center max-w-4xl mx-auto text-[18px] text-[#1B1A1A70] raleway">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form action="" className="max-w-5xl mx-auto pb-18">
            <div className="grid grid-cols-2 gap-6 raleway ">
              <div className="flex flex-col gap-4 ">
                <label className="text-xl text-[#1B1A1A80] " htmlFor="name">
                  Name
                </label>

                <input
                  className="p-3 rounded-sm bg-[#FFFFFF] text-[#1B1A1A60] raleway"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee name"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label className="text-xl text-[#1B1A1A80] " htmlFor="name">
                  Chef
                </label>

                <input
                  className="p-3 rounded-sm bg-[#FFFFFF] text-[#1B1A1A60]"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee chef"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label className="text-xl text-[#1B1A1A80]" htmlFor="name">
                  Supplier
                </label>

                <input
                  className="p-3 rounded-sm bg-[#FFFFFF] text-[#1B1A1A60]"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee supplier"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label className="text-xl text-[#1B1A1A80]" htmlFor="name">
                  Taste
                </label>

                <input
                  className="p-3 rounded-sm bg-[#FFFFFF] text-[#1B1A1A60]"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee taste"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label className="text-xl text-[#1B1A1A80]" htmlFor="name">
                  Category
                </label>

                <input
                  className="p-3 rounded-sm bg-[#FFFFFF] text-[#1B1A1A60]"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee category"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <label className="text-xl text-[#1B1A1A80]" htmlFor="name">
                  Details
                </label>

                <input
                  className="p-3 rounded-sm bg-[#FFFFFF] text-[#1B1A1A60]"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee details"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4 mt-6 ">
                <label
                  className="text-xl text-[#1B1A1A80] raleway"
                  htmlFor="name"
                >
                  Photo
                </label>

                <input
                  className="p-3 rounded-sm bg-[#FFFFFF] text-[#1B1A1A60] raleway"
                  type="file"
                  name="name"
                  id=""
                  placeholder="Enter photo URL"
                />

                <input
                  className="rancho text-2xl text-[#331A15] bg-[#D2B48C] py-[13px] rounded-sm"
                  type="submit"
                  value="Add Coffee"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
