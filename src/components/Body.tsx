// rfce
import { useBaseEncodingLogic } from "../logic/encodingUtils";

function Body() {
  const {
    inputText,
    setInputText,
    outputText,
    action,
    setAction,
    encoding,
    setEncoding,
    handleSubmit,
    convertedText,
  } = useBaseEncodingLogic();

 // opciones de base
  const encodingOptions = [
    { value: 'base64', label: 'Base64' },
    { value: 'base32', label: 'Base32' },
    { value: 'base58', label: 'Base58' },
    { value: 'base91', label: 'Base91' },
  ];

  return (
    <>
      <div className="container text-center text-white">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mt-5 bg-color1">
              <div className="card-header">Encoder/Decoder</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Text
                    </label>
                    <textarea
                      className="form-control text-white color1"
                      id="text"
                      rows={3}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="action" className="form-label">
                      Action
                    </label>
                    <select
                      className="form-select color1 text-white"
                      id="action"
                      value={action}
                      onChange={(e) => setAction(e.target.value)}
                    >
                      <option value="encode">Encode</option>
                      <option value="decode">Decode</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="encoding" className="form-label">
                      Encoding
                    </label>
                    <select
                      className="form-select color1 text-white"
                      id="encoding"
                      value={encoding}
                      onChange={(e) => setEncoding(e.target.value)}
                    >
                     {encodingOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-purple">
                    Convert
                  </button>
                </form>
                <div className="mt-4">
                  <label htmlFor="encoded_text" className="form-label">
                  Result
                  </label>
                  <input
                    type="text"
                    className="form-control mx-auto color1 text-white"
                    id="encoded_text"
                    value={outputText}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
