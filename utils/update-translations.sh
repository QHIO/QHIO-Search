#!/bin/sh

# script to easily update translation language files

# add new language:
# pybabel init -i messages.pot -d searx/translations -l en

set -e

SEARX_DIR='searx'

pybabel extract -F babel.cfg -o messages.pot "$SEARX_DIR"
for f in `ls "$SEARX_DIR"'/translations/'`; do
#    pybabel update -N -i messages.pot -d "$SEARX_DIR"'/translations/' -l "$f"
    # pybabel cannot correctly update HTML po files, use gettxt commands.
    msgmerge -U "$SEARX_DIR"/translations/"$f"/LC_MESSAGES/messages.po messages.pot

done

echo '[!] update done, edit .po files if required and run pybabel compile -d searx/translations/'
