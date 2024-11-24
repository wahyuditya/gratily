import Button from "./button";

function Logout() {
  return (
    <>
      <div className="mr-[20px]">
        <Button label="Log out" variant="secondary" type="button" bordered />
      </div>
    </>
  );
}

export default Logout;
