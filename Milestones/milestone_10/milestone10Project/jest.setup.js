// expo/src/winter/runtime.native installs several globals as lazy getters (via defineLazyObjectProperty).
// When those getters fire during test execution, isInsideTestCode=false causes Jest to throw:
//   "You are trying to import a file outside of the scope of the test code."
//
// We use Object.getOwnPropertyDescriptor to detect lazy getters WITHOUT triggering them,
// then assign via the SETTER to replace each lazy getter with a plain value harmlessly.
// This setup file runs after jest-expo/src/preset/setup.js (which loads expo/src/winter
// and installs the lazy getters), so all setters are in place by the time this runs.

function resolveExpoLazyGlobal(name, mockValue) {
  const desc = Object.getOwnPropertyDescriptor(global, name);
  if (desc && typeof desc.get === 'function') {
    // Property is a lazy getter — trigger the setter with a mock value.
    // The setter stores the value and replaces the accessor descriptor with a plain
    // value descriptor, so the deferred require() inside the getter never runs.
    global[name] = mockValue;
  }
}

resolveExpoLazyGlobal('__ExpoImportMetaRegistry', { url: null });
resolveExpoLazyGlobal('structuredClone', (obj) =>
  JSON.parse(JSON.stringify(obj))
);
resolveExpoLazyGlobal('TextDecoder', class TextDecoder {});
resolveExpoLazyGlobal('TextDecoderStream', class TextDecoderStream {});
resolveExpoLazyGlobal('TextEncoderStream', class TextEncoderStream {});
resolveExpoLazyGlobal('URL', class URL {});
resolveExpoLazyGlobal('URLSearchParams', class URLSearchParams {});
