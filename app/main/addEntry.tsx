function AddEntry() {
  return (
    <>
      <div className="warper grid place-content-center gap-[59px] mt-[30px] w-full">
        <div className="text max-w-[780px] font-playfair">
          <span className="text-[38px] font-light text-[rgba(78,78,78,0.8)]">
            "I know your day might be a bit{" "}
            <span className="font-bold text-appColor-950">heavy,</span>
          </span>{" "}
          <br />{" "}
          <span className="text-[28px] text-[rgba(78,78,78,0.8)]">
            but take a moment to reflect, what are you{" "}
            <span className="italic text-appColor-950">grateful</span> for
            today?"
          </span>
        </div>
        <form
          action="#"
          className="flex max-w-[780px] flex-col items-center w-full gap-[21px] rounded-[4px]"
        >
          <textarea
            name=""
            id=""
            placeholder="I'm grateful for..."
            className="w-full h-[128px] px-[18px] py-[12px] bg-[#fafafa] text-appColor-text font-playfair text-[18px] border border-appColor-border rounded-[4px]"
          ></textarea>
          <button className="h-[42px] px-[32px] w-[120px] bg-appColor-500 rounded-[4px] text-appColor-text text-[14px]">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default AddEntry;
