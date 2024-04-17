import bgimage from "../imgaes/bgimage.png";

const Pricing = () => {
  return (
    <>
      <div className="speech-video">
        <img src={bgimage} className="b-img"/>
        <div className="pricing-header pb-md-4 mx-auto text-center pricing">
          <p className="fs-5 text-body-secondary parah">
            Upgrade to Speechify Premium and power through your reading with our
            most advanced tools and features.
          </p>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center cardbody">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $0
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 standard reading voices</li>
                    <li>Listen at speeds up to 1x</li>
                    <li>Listen anywhere</li>
                    <li>Text to speech features only</li>
                    <li>All 20+ languages & accents</li>
                    <li>Support adding pauses</li>
                    <li>10 minutes of voice generation</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary btn-p"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pro</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $12
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Download as video, audio, or text</li>
                    <li>Video and audio Dubbing</li>
                    <li>Video and audio Transcription</li>
                    <li>12 hours of Dubbing per user/year</li>
                    <li>50 hours of voice generation per user/year</li>
                    <li>1250 hours of Transcription per user/year</li>
                    <li>8000+ licensed soundtracks</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary btn-p"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm n-card">
                <div className="card-header py-3 n-text">
                  <h4 className="my-0 fw-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $26
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>AI Avatars</li>
                    <li>Voice Cloning</li>
                    <li>100 hours of voice generation per user/year</li>
                    <li>100 hours Video and Audio Transcription</li>
                    <li>1 hour of AI Avatar Video/year</li>
                    <li>36 hours of Dubbing per user/year</li>
                    <li>100 hours Video and Audio Transcription</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary btn-p"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
