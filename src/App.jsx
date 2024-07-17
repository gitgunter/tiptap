import TiptapEditor from './components/TiptapEditor/TiptapEditor';

function App() {
  return (
    <div
      style={{
        overflowY: 'auto',
        width: '100%',
        display: 'flex',
        backgroundColor: '#121212',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <TiptapEditor />
    </div>
  );
}

export default App;
