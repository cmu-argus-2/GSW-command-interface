export default function CommandInput() {
  return (
    <div class="flex justify-center items-center m-8">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Enter a Command</legend>
        <input type="text" placeholder="Type here" className="input" />
      </fieldset>
    </div>
  );
}
