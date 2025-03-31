defmodule MessageProcessor do
  use GenServer

  def start_link(_) do
    GenServer.start_link(__MODULE__, %{})
  end

  def init(state) do
    {:ok, state}
  end

  def handle_casting({:process_message, message}, state) do
      IO.puts("[Received]: #{message}")

      process_message = process_rust(message)
      {:noreply, %{state | processed_message: process_message}}
  end

  def process_with_rust(message) do
    RustIntegration.process_message(message)
  end
end