defmodule RustIntegration do
  def process_message(message) do
    RustNIF.process_message(message)
  end
end
