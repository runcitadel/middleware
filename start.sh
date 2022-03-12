#!/bin/sh

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

# Usage
# ./start.sh <hostname>
# Other documentation: https://docs.docker.com/compose/startup-order/

set -e


export HOST="$1"

found=1
iterations=1
until [ $found = 2 ]; do
  if node ./ping-manager.mjs; then
    echo "Manager is up, running Middleware..."
    found=2
  else
    echo "Can't connect, keep trying"
  fi
  if [ $iterations -gt 14 ]; then
    echo "Cannot connect after 15 tries, giving up"
    exit 1
  fi
  ((iterations=iterations+1))
  sleep 2
done

# start server
node --experimental-json-modules /app/bin/www.mjs
