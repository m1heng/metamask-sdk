const styles = {
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row' as 'row',
  },
  flexItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItem11: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItem1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    padding: 8,
    cursor: 'pointer',
    backgroundColor: '#F2F4F6',
    fontSize: 12,
    textAlign: 'center',
    color: '#24292E',
  },
  tabcontainer: {
    padding: '4px',
    backgroundColor: '#F2F4F6',
    borderRadius: '8px',
    marginBottom: 30,
    marginTop: 30,
  },
  tabactive: {
    backgroundColor: 'white',
    WebkitTransition: 'background-color 300ms linear',
    msTransition: 'background-color 300ms linear',
    transition: 'background-color 300ms linear',
    borderRadius: '8px',
  },
  item: {
    fontSize: '12px',
    marginBottom: 16,
    borderRadius: '8px',
    padding: '10px',
    border: '2px #F2F4F6 solid',
    color: '#24292E',
  },
  notice: {
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10,
    color: 'grey',
  },
  button: {
    marginTop: '41.5px',
    marginBottom: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 20px',
    background: '#037DD6',
    borderRadius: '32px',
    color: 'white',
    border: '0',
    fontSize: '14px',
    cursor: 'pointer',
  },
  backdrop: {
    visibility: 'visible' as 'visible',
    position: 'fixed' as 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    zIndex: 99998,
    background: 'rgba(0, 0, 0, 0.87)',
    opacity: 0.3,
  },
  modal: {
    visibility: 'visible' as 'visible',
    position: 'fixed' as 'fixed',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 99999,
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    top: '50%',
    maxWidth: '100%',
    width: 460,
    minWidth: 300,
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
    WebkitFontSmoothing: 'antialiased',
  },
  closeButton: {
    color: '#BBC0C5',
    cursor: 'pointer',
  },
  closeButtonContainer: {},
  logoContainer: {
    marginHorizontal: 24,
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectMobileText: {
    fontSize: 14,
    color: 'black',
    marginTop: 28,
    marginBottom: 28,
    lineHeight: 2,
  },
  blue: {
    color: '#037DD6',
    fontWeight: 700,
  },
  installExtensionText: {
    marginLeft: 10,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
  },
};

export default styles;
