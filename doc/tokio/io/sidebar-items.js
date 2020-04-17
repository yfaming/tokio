initSidebarItems({"enum":[["ErrorKind","A list specifying general categories of I/O error."]],"fn":[["copy","Asynchronously copies the entire contents of a reader into a writer."],["empty","Creates a new empty async reader."],["repeat","Creates an instance of an async reader that infinitely repeats one byte."],["sink","Creates an instance of an async writer which will successfully consume all data."],["split","Splits a single value implementing `AsyncRead + AsyncWrite` into separate `AsyncRead` and `AsyncWrite` handles."],["stderr","Constructs a new handle to the standard error of the current process."],["stdin","Constructs a new handle to the standard input of the current process."],["stdout","Constructs a new handle to the standard output of the current process."],["stream_reader","Convert a stream of byte chunks into an `AsyncRead`."]],"struct":[["BufReader","The `BufReader` struct adds buffering to any reader."],["BufStream","Wraps a type that is [`AsyncWrite`] and [`AsyncRead`], and buffers its input and output."],["BufWriter","Wraps a writer and buffers its output."],["Copy","A future that asynchronously copies the entire contents of a reader into a writer."],["Empty","An async reader which is always at EOF."],["Error","The error type for I/O operations of the [`Read`], [`Write`], [`Seek`], and associated traits."],["Lines","Stream for the `lines` method."],["PollEvented","Associates an I/O resource that implements the [`std::io::Read`] and/or [`std::io::Write`] traits with the reactor that drives it."],["ReadHalf","The readable half of a value returned from `split`."],["Registration","Associates an I/O resource with the reactor instance that drives it."],["Repeat","An async reader which yields one byte over and over and over and over and over and..."],["Seek","Future for the `seek` method."],["Sink","An async writer which will move data into the void."],["Split","Stream for the `split` method."],["Stderr","A handle to the standard error stream of a process."],["Stdin","A handle to the standard input stream of a process."],["Stdout","A handle to the standard output stream of a process."],["StreamReader","Convert a stream of byte chunks into an [`AsyncRead`]."],["Take","Stream for the `take` method."],["WriteHalf","The writable half of a value returned from `split`."]],"trait":[["AsyncBufRead","Reads bytes asynchronously."],["AsyncBufReadExt","An extension trait which adds utility methods to [`AsyncBufRead`] types."],["AsyncRead","Reads bytes from a source."],["AsyncReadExt","Reads bytes from a source."],["AsyncSeek","Seek bytes asynchronously."],["AsyncSeekExt","An extension trait which adds utility methods to `AsyncSeek` types."],["AsyncWrite","Writes bytes asynchronously."],["AsyncWriteExt","Writes bytes to a sink."]],"type":[["Result","A specialized `Result` type for I/O operations."]]});