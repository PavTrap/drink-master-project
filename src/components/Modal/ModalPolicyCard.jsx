const ModalPolicyCard = () => {
    return (
      <div style={body}>
        <h2 style={headding}>Privacy Policy</h2>
        <p>
        &nbsp;  Your privacy is important to us. This section outlines how we collect, use, process, and protect your personal data. This Privacy
          Policy applies to the use of our website, applications, and services, so please take a moment to read it.
        </p>
        <p style={downMargin}>What personal data do we collect:</p><p>
        &nbsp;  We may collect various types of personal data that you voluntarily provide when interacting with
          our website, registering an account or filling out forms. This may include your name, email address, phone number and more.
        </p>
        <p style={downMargin}> How we use your personal data:</p> <p>
        &nbsp; We use the collected personal data to provide services, manage your account, provide you with
          information about our products and services, and to communicate with you regarding inquiries and updates.
        </p>
        <p style={downMargin}>Protection of personal data:</p><p>
        &nbsp; We take every effort to protect your information and use modern technologies to prevent unauthorized
          access, loss, or disclosure of your personal information.
        </p>
        <p style={downMargin}>Disclosure to third parties:</p><p>
        &nbsp; We do not disclose your personal data to third parties without your consent, except when required by
          law or to provide the services you requested.
        </p>
        <p style={downMargin}>Changes to the Privacy Policy:</p><p>
       
        &nbsp; We may periodically update this Privacy Policy. Please refer to this page to stay informed about any
          changes.
        </p>
        <p style={downMargin}>Contact us:</p><p>
        &nbsp; If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the
          contact details provided on our website.
        </p>
      </div>
    );
  };
  export default ModalPolicyCard;
  
  
  const body={ 
    width: '500px', 
    color: 'white', 
    textAlign: 'justify'
  }
  
  const downMargin={
    marginBottom: '8px',
    textAlign:"center",
  }
  const headding={
    textAlign: 'center', 
    marginBottom:"20px", 
    width: "90%", 
    marginLeft:"auto", 
    marginRight: "auto", 
    letterSpacing: "0.1em"
  }
  