'use strict';

angular2App.factory('Video', function()
{
    function Video( data )
    {
        var p;

        for (p in data)
        {
            this[p] = data[p];
        }
    }

    Video.prototype.formatDuration = function()
    {
        if (this.duration)
        {
            var a = this.duration / 60,
                b = a >> 0,
                c = Math.round( 60 * (a - b) );

            if (b < 10) b = '0' + b;
            if (c < 10) c = '0' + c;

            return b + ':' + c;
        }

        return '00:00';
    };

    Video.prototype.formatTotalViews = function()
    {
        if (this.views_total)
        {
            return parseInt(this.views_total, 10).toLocaleString().replace(/\s/g, ',');
        }

        return '0';
    };

    return Video;
});