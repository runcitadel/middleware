#!/bin/sh

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

# Usage
# ./wait-for-manager.sh <hostname>
# Other documentation: https://docs.docker.com/compose/startup-order/


set -e

export HOST="$1"

echo "Pinging Manager at http://${HOST}/ping"

attempts=1
max_attempts=15
wait_time=2
while [ $attempts -le $max_attempts ]; do
  if node ./ping-manager.mjs; then
    echo "Manager is up, running Middleware..."
    exit 0
  else
    echo "Attempt $attempts/$max_attempts: Cannot connect to Manager, trying again in $wait_time seconds..."
  fi
  attempts=$((attempts+1))
  sleep $wait_time
done

echo "Cannot connect after $max_attempts attempts, giving up."
exit 1
